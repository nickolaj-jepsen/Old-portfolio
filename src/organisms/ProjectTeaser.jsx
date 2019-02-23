import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { graphql, StaticQuery } from 'gatsby';
import LinkButton from '../molecules/LinkButton';
import Card from '../atoms/Card';

const Projects = styled.div`
  margin-top: calc(100vh - 15em);
  margin-bottom: 2em;
  z-index: 10;

  @media screen and (max-height: 600px), screen and (max-width: 800px) {
    margin-top: 1em;
  }

  & > h2 {
    margin: 0;
    width: 100%;
    text-align: center;
    padding: 1em;
    background-color: transparent;
    text-shadow: 5px 5px 5px black;
  }
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const query = graphql`
  query {
    allProjectsYaml(filter: { highlighted: { eq: true } }) {
      edges {
        node {
          name
          link
          description
        }
      }
    }
  }
`;

export default () => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <>
          <Projects>
            <h2>Check out my projects!</h2>
            <ProjectList>
              {data.allProjectsYaml.edges.map(({ node }) => (
                <Card
                  name={node.name}
                  description={node.description}
                  link={node.link}
                  icon={<FaGithub />}
                />
              ))}
            </ProjectList>
          </Projects>
          <LinkButton to="/projects">
            You can find more of my projects here
          </LinkButton>
        </>
      )}
    />
  );
};

import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery, Link } from 'gatsby';
import LinkButton from '../molecules/LinkButton';
import colors from '../constants/color';
import shadow from '../constants/shadow';

const Title = styled.h2`
  padding: 1rem 1rem 1rem 1rem;
  margin: 0 0 0;
`;

const Content = styled.p`
  padding: 0 1rem 1rem 1rem;
  margin: 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-top: ${colors.background} solid 2px;
`;

const Date = styled.small``;

const ReadTime = styled.small`
  :before {
    content: 'Read time: ';
  }
  :after {
    content: ' mins';
  }
`;

const BlogPost = styled.div`
  width: calc(100% - 14em);
  max-width: 50em;
  background-color: ${colors.backgroundLight};
  border-radius: 2px;
  box-shadow: ${shadow.z2};
  border: ${colors.background} solid 1px;
  margin: 1em 1em 1em 1em;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 800px) {
    width: 100%;
    margin: 1em;
  }
`;

const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            urlDate: date(formatString: "YYYY/MM/DD")
            title
            slug
          }
          timeToRead
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
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            const link = `blog/${node.frontmatter.urlDate}/${
              node.frontmatter.slug
            }`;
            return (
              <BlogPost key={node.fields.slug}>
                <Title>
                  <Link to={link}>{title}</Link>
                </Title>
                <Content dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                <Footer>
                  <Date>{node.frontmatter.date}</Date>
                  <ReadTime>{node.timeToRead}</ReadTime>
                </Footer>
              </BlogPost>
            );
          })}
          <LinkButton to="/blog">
            Find the rest of my blog posts here
          </LinkButton>
        </>
      )}
    />
  );
};

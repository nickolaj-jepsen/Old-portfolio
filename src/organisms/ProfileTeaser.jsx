import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import colors from '../constants/color';
import shadow from '../constants/shadow';
import Hero from '../atoms/Hero';

const Header = styled.h3`
  margin-top: 1rem;
  margin-bottom: 0;
`;

const Content = styled.p`
  padding: 1rem;
`;
const ProfilePicture = styled(Img)`
  width: 10rem;
  border: ${colors.backgroundDark} 5px solid;
  border-radius: 50%;
  margin-top: -5rem;
  box-shadow: ${shadow.z4};
`;

const ProfileCard = styled.div`
  width: calc(100% - 14em);
  max-width: 50em;
  background-color: ${colors.backgroundLight};
  border-radius: 2px;
  box-shadow: ${shadow.z2};
  border: ${colors.background} solid 1px;
  margin: 7em 1em 1em 1em;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

const query = graphql`
  query ProfilePictureQuery {
    picture: file(relativePath: { eq: "profile_picture.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 200) {
          ...GatsbyImageSharpFluid
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
        <ProfileCard>
          <ProfilePicture fluid={data.picture.childImageSharp.fluid} />
          <Header>I'm Nickolaj</Header>
          <Content>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.".
          </Content>
        </ProfileCard>
      )}
    />
  );
};

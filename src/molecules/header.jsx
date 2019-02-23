import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import colors from '../constants/color';

const Container = styled.header`
  display: flex;
  align-items: center;
  background-color: ${colors.darkBackground};
  padding: 1em;
`;

const Logo = styled(Img)`
  width: 2em;
  height: 5em;
`;

const query = graphql`
  query {
    logoImage: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 96) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Header = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Container>
        <Link to="/">
          <Logo fixed={data.logoImage.childImageSharp.fluid} />
        </Link>
      </Container>
    )}
  />
);

Header.defaultProps = {
  siteTitle: '',
};

export default Header;

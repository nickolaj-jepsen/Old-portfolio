import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../constants/color';
import { withTheme } from '../utils/contexts/ThemeContext';

const Image = styled(Img)`
  transition: filter 0.5s ease;
`;

const LogoWrapper = styled.header`
  height: 5em;
  width: 5em;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: ${colors.header.iconBackground};
  transition: background-color ease 0.2s, filter ease 0.5s;

  ${props =>
    props.transparent &&
    css`
      background-color: transparent;
      filter: brightness(0.7) grayscale(0.9);

      &:hover {
        filter: none;
      }
    `}
`;

const Logo = styled.div`
  width: 1.5em;
  &:hover ${Image} {
    filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 1));
  }
`;

const query = graphql`
  query {
    logoImage: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxHeight: 192, maxWidth: 92) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const HeaderLogo = ({ isMuted }) => (
  <StaticQuery
    query={query}
    render={data => (
      <LogoWrapper transparent={isMuted}>
        <Logo>
          <Image fluid={data.logoImage.childImageSharp.fluid} />
        </Logo>
      </LogoWrapper>
    )}
  />
);

HeaderLogo.propTypes = {
  isMuted: PropTypes.bool.isRequired,
};

export default withTheme(HeaderLogo);

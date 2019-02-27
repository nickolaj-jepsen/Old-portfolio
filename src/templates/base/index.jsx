import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import Img from 'gatsby-image';
import { IconContext } from 'react-icons';
import HeaderComponent from '../../molecules/header';
import colors from '../../constants/color';
import measurements from '../../constants/measurements';
import GutterComponent from '../../molecules/gutter';
import { ThemeProvider } from '../../utils/contexts/ThemeContext';
import shadow from '../../constants/shadow';
import WIPBanner from '../../atoms/WIPBanner';

const GlobalStyle = createGlobalStyle`
  html {
  overflow-y: visible;
  overflow-x: hidden;
  scrollbar-width: auto;
  scrollbar-color: ${colors.backgroundLight} ${colors.backgroundDark};
  }
  body, html {
    height: 100%;
    background-color: ${colors.background};
    color: ${colors.foreground};
  }
  
  h1, h2, h3, h4, h5, h6, p, span, li, small, summary {
    color: ${colors.foreground};
  }
  
  #___gatsby, #___gatsby > * { 
    height: 100%; 
  }
  
  summary { display: list-item !important; }
`;

const Grid = styled.div`
  overflow-x: hidden;
  display: grid;
  min-height: 100%;
  grid-column-gap: 2em;
  grid-template-columns: [gutter] ${measurements.headerWidth} [content] 1fr [end];
  grid-template-rows: [navbar] ${measurements.headerWidth} [content] 1fr [end];
  grid-template-areas:
    'header header header'
    'gutter content content'
    'gutter content content';
  @media only screen and (max-width: 800px) {
    grid-column-gap: 1em;
    grid-template-columns: [content] 1fr [end];
    grid-template-rows: [navbar] ${measurements.headerWidth} [content] 1fr [gutter] auto [end];
    grid-template-areas:
      'header'
      'content'
      'gutter';
  }
`;

const Header = styled(HeaderComponent)`
  grid-area: header;
  position: fixed;
  width: 100%;
  z-index: 15;
  box-shadow: ${shadow.z2};
  // clip shadow of gutter
  @media only screen and (min-width: 799px) {
    clip-path: polygon(200% 0, 200% 200%, 5em 200%, 5em 100%, 0% 100%, 0 0);
  }
`;

const Gutter = styled(GutterComponent)`
  grid-area: gutter;
  box-shadow: ${shadow.z2};
`;

const Main = styled.main`
  grid-area: content;
  margin-bottom: 2em;
  @media only screen and (max-width: 800px) {
    margin: 0 1em;
  }
`;

const Splash = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh + 5em);
  z-index: 5;
  clip-path: polygon(
    50% 100%,
    100% calc(100% - 5em),
    100% 0,
    0 0,
    0 calc(100% - 5em)
  );
  filter: drop-shadow(10px 10px 5px rgba(0, 0, 0, 1));
  .gatsby-image-wrapper {
    height: 100%;
  }
`;

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    desktop: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2880) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Layout = ({ children, showSplash }) => (
  <StaticQuery
    query={query}
    render={data => {
      return (
        <ThemeProvider>
          <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
            <Grid>
              <WIPBanner />
              <Header transparent={showSplash} />
              <Gutter />
              <Main>{children}</Main>
              <GlobalStyle />
              {showSplash && (
                <Splash>
                  <Img fluid={data.desktop.childImageSharp.fluid} />
                </Splash>
              )}
            </Grid>
          </IconContext.Provider>
        </ThemeProvider>
      );
    }}
  />
);

Layout.defaultProps = {
  showSplash: false,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showSplash: PropTypes.bool,
};

export default Layout;

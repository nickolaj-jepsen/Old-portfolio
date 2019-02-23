import React from 'react';
import styled from 'styled-components';
import Layout from '../templates/base';
import SEO from '../molecules/seo';
import Hero from '../atoms/Hero';
import ProjectTeaser from '../organisms/ProjectTeaser';
import shadow from '../constants/shadow';
import measurements from '../constants/measurements';
import BlogTeaser from '../organisms/BlogTeaser';
import ProfileTeaser from '../organisms/ProfileTeaser';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;

  @media only screen and (min-width: 799px) {
    margin-left: -${measurements.gutterAndPaddingWidth};
  }
  margin-bottom: 2em;
`;

const SubHeader = styled.h2`
  width: 100%;
  text-align: center;
  background-color: #222831;
  margin-bottom: 2em;
  z-index: 2;
  height: 8rem;
  line-height: 8rem;
  box-shadow: ${shadow.z2};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media only screen and (min-width: 799px) {
    // clip gutter
    clip-path: inset(-100% 0 -100% 5rem);
  }
`;

const IndexPage = () => (
  <Layout showSplash>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Hero>
      <h1>Hi, I'm Nickolaj Jepsen</h1>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.".
      </p>
    </Hero>
    <Container>
      <ProjectTeaser />
      <SubHeader>About me</SubHeader>
      <ProfileTeaser />
      <SubHeader>Read some of my ramblings</SubHeader>
      <BlogTeaser />
    </Container>
  </Layout>
);

export default IndexPage;

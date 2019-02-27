import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaEnvelopeSquare,
  FaLinkedin,
} from 'react-icons/fa';
import colors from '../constants/color';

const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${colors.header.background};
  align-items: center;
`;

const SocialContainer = styled.div`
  padding: 0.5em;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
  width: 100%;
  max-width: 10em;
`;

const Link = styled.a`
  font-size: 1.5em;
  color: ${colors.foregroundFaded};
  align-items: center;
  text-decoration: none;
  justify-content: center;
  transition: text-shadow 0.5s ease, color 0.2s ease;

  &:hover {
    color: ${colors.foreground};
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
`;

const Copyright = styled.p`
  margin: 0 0 1em 0;
  font-weight: 100;
  font-size: 0.75em;
  line-height: 1em;
  text-align: center;
  color: ${colors.foregroundFaded};
`;

const Gutter = ({ className }) => (
  <Wrapper className={className}>
    <SocialContainer>
      <Link href="mailto:nickolaj1177@gmail.com">
        <FaEnvelopeSquare />
      </Link>
      <Link href="https://github.com/fire-proof">
        <FaGithubSquare />
      </Link>
      <Link href="https://www.facebook.com/nickolaj1177">
        <FaFacebookSquare />
      </Link>
      <Link href="https://www.linkedin.com/in/nickolaj-jepsen/">
        <FaLinkedin />
      </Link>
    </SocialContainer>
    <Copyright>© 2019 Nickolaj Jepsen</Copyright>
  </Wrapper>
);

Gutter.propTypes = {
  className: PropTypes.string,
};

Gutter.defaultProps = {
  className: '',
};

export default Gutter;

import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../constants/color';
import HeaderLogo from '../atoms/HeaderLogo';
import HeaderMenuElement from '../atoms/HeaderMenuElement';
import { withTheme } from '../utils/contexts/ThemeContext';

const Container = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${colors.header.background};
  transition: background-color ease 0.2s, filter ease 0.5s;
  ${props =>
    props.transparent &&
    css`
      box-shadow: none !important;
      background-color: transparent;
    `}
`;

const Header = ({ className, isMuted }) => {
  return (
    <Container transparent={isMuted} className={className}>
      <Link to="/">
        <HeaderLogo />
      </Link>
      <HeaderMenuElement name="Home" link="/" active />
      <HeaderMenuElement name="Projects" link="/projects" />
      <HeaderMenuElement name="Blog" link="/blog" />
    </Container>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  isMuted: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  className: '',
};

export default withTheme(Header);

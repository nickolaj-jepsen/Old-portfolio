import React from 'react';
import PropTypes from 'prop-types';
import { Link as LinkComponent } from 'gatsby';
import styled, { css } from 'styled-components';
import colors from '../constants/color';
import measurements from '../constants/measurements';
import { withTheme } from '../utils/contexts/ThemeContext';

const Entry = styled.span`
  color: ${colors.primary};
  transition: text-shadow 0.5s ease, color 0.2s ease;
`;

const Link = styled(LinkComponent)`
  width: 6em;
  height: ${measurements.headerWidth};
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  font-weight: 800;
  transition: background-color ease 0.2s, filter ease 0.5s;

  &:hover {
    ${Entry} {
      color: ${colors.primaryLight};
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
    }
  }

  ${props =>
    props.active &&
    css`
      border-bottom: 1px solid ${colors.primary};
    `}

  ${props =>
    props.transparent &&
    css`
      filter: brightness(0.7) grayscale(0.9);

      &:hover {
        filter: none;
      }
    `}
`;

const HeaderMenuElement = ({ name, link, active, isMuted }) => (
  <Link active={active} transparent={isMuted} className={active} to={link}>
    <Entry>{name}</Entry>
  </Link>
);

HeaderMenuElement.defaultProps = {
  active: false,
};

HeaderMenuElement.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  active: PropTypes.bool,
  isMuted: PropTypes.bool.isRequired,
};

export default withTheme(HeaderMenuElement);

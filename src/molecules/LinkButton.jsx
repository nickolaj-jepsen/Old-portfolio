import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../atoms/Button';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LinkButton = ({ children, ...props }) => {
  return (
    <StyledLink {...props}>
      <Button>{children}</Button>
    </StyledLink>
  );
};

LinkButton.propTypes = {
  children: PropTypes.element,
};

LinkButton.defaultProps = {
  children: '',
};

export default LinkButton;

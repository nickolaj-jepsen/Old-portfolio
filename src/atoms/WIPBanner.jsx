import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import colors from '../constants/color';
import shadow from '../constants/shadow';

const Ribbon = styled.div`
  overflow: hidden;
  background-color: ${colors.primary};
  z-index: 100;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  right: -50px;
  top: 40px;
  transform: rotate(45deg);
  box-shadow: ${shadow.z2};
`;

const RibbonLink = styled.a`
  border: 1px solid #faa;
  color: #fff;
  display: block;
  font: bold 81.25% 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 1px 0;
  padding: 10px 50px;
  text-align: center;
  text-decoration: none;
  text-shadow: 0 0 5px #444;
`;

export default () => {
  return (
    <Ribbon>
      <RibbonLink href={'http://github.com'}>Work in progress</RibbonLink>
    </Ribbon>
  );
};

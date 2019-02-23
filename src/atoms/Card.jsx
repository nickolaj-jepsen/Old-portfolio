import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../constants/color';
import shadow from '../constants/shadow';

const CardBase = styled.div`
  background-color: ${colors.backgroundLight};
  border-radius: 2px;
  box-shadow: ${shadow.z2};
  width: 15em;
  border: ${colors.background} solid 1px;
  margin: 1em;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  > h4 {
    margin: 0;
    padding: 1em;
    border-bottom: ${colors.background} solid 2px;
  }
`;

const Body = styled.div`
  flex-grow: 5;
  > p {
    margin: 0;
    padding: 1em;

    font-size: 0.85em;
    line-height: 1.2em;
  }
`;

const Footer = styled.div`
  border-top: ${colors.background} solid 2px;
  padding: 1em;
  font-size: 0.75em;
  text-align: center;
  margin: 0;
`;

export default function Card({ name, description, link, icon }) {
  return (
    <CardBase>
      <Header>
        <h4>{name}</h4>
      </Header>
      <Body>
        <p>{description}</p>
      </Body>
      <Footer>
        <a href={link}>
          View the project on &nbsp;
          {icon}
        </a>
      </Footer>
    </CardBase>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

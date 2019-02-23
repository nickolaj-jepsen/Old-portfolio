import styled from 'styled-components';
import colors from '../constants/color';
import shadow from '../constants/shadow';

export default styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
  text-decoration: none !important;
  max-width: 80vw;
  display: inline;
  background: ${colors.backgroundDark};
  color: #ffffff !important;
  font-weight: 700;
  padding: 1em;
  border-radius: 6px;
  font-variant-ligatures: no-common-ligatures;
  font-feature-settings: 'liga' 0;
  letter-spacing: 0.1em;
  transition: all 0.3s ease 0s;
  box-shadow: ${shadow.z1};
  &:hover {
    box-shadow: ${shadow.z4};
  }
`;

import styled from 'styled-components';
import measurements from '../constants/measurements';

export default styled.div`
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 20vh;
  left: 0;
  right: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;

  @media screen and (max-height: 600px) {
    position: relative;
    margin-right: ${measurements.gutterAndPaddingWidth};
    margin-top: 0;
  }

  @media screen and (max-width: 800px) {
    margin-right: 1em !important;
    position: relative;
    margin-top: 0;
  }

  & > h1 {
    margin: 0;
    font-size: 3em;
    text-shadow: 5px 5px 5px black;
  }

  & > p {
    margin: 1em 0;
    font-weight: 400;
    font-size: 0.92em;
    text-shadow: 2px 2px 3px black;
    max-width: 80ex;
  }
`;

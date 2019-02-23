import React from 'react';
/* global window document */
import { Location } from '@reach/router';
import * as PropTypes from 'prop-types';
import scrollHook from '../hooks/scrollHook';

const Theme = React.createContext();

const mutedPaths = ['/'];

export function ThemeProvider({ children }) {
  const { y } = scrollHook();
  let viewport = Number.MAX_SAFE_INTEGER;

  if (typeof window !== `undefined`) {
    viewport = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
  }

  return (
    <Location>
      {({ location }) => {
        const isMutePath = mutedPaths.includes(location.pathname);

        return (
          <Theme.Provider
            value={{
              isMuted: isMutePath && y < viewport,
            }}
          >
            {children}
          </Theme.Provider>
        );
      }}
    </Location>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export function withTheme(Component) {
  return function ThemeComponent(props) {
    return (
      <Theme.Consumer>
        {contexts => <Component {...props} {...contexts} />}
      </Theme.Consumer>
    );
  };
}

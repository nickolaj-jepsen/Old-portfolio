/* global window */
import { useState, useEffect } from 'react';
import _throttle from 'lodash.throttle';

const getPosition = () => {
  if (typeof window !== `undefined`) {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset,
    };
  }
  return {
    x: 0,
    y: 0,
  };
};

function useWindowScrollPosition() {
  const [position, setPosition] = useState(getPosition());

  if (typeof window !== `undefined`) {
    useEffect(() => {
      const handleScroll = _throttle(() => {
        setPosition(getPosition());
      }, 100);

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  }

  return position;
}

export default useWindowScrollPosition;

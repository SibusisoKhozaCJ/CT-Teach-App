// From user QoP https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
/**
 * I tried using this to fit the iframe no matter if it was through a browser or a web-app.
 * Didn't get it to work right :/
 */
import { useState, useEffect } from 'react';
import {isMobile} from 'react-device-detect';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
    headerHeight: isMobile ? height/10 : 70,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

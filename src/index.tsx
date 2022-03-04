import ReactDOM from 'react-dom';
import '@fontsource/roboto';

import React, { useEffect as useEffectSource, useState as useStateSource } from 'react';
import App from './App';
import './index.css';
import { ConnectionStatusType } from './types';

if (process.env.NODE_ENV === 'development') {
  const closeWindow = () => console.log('mock closeWindow');

  const minimizeWindow = () => console.log('mock minimizeWindow');

  const useConnectionStatusBuild = (
    useEffect: typeof useEffectSource,
    useState: typeof useStateSource,
  ) => () => {
    const [
      currentConnectionStatusType,
      setCurrentConnectionStatusType,
    ] = useState(ConnectionStatusType.NOT_CONNECTED);

    useEffect(() => {
      const id = setInterval(
        () => {
          setCurrentConnectionStatusType(() => Math.floor(Math.random() * 3));
        },
        500,
      );
      return () => clearInterval(id);
    }, []);
    return {
      currentConnectionStatusType,
    };
  };
  window.initScript = (useEffect, useState) => {
    window._ = {
      closeWindow,
      minimizeWindow,
      useConnectionStatus: useConnectionStatusBuild(useEffect, useState),
    };
  };
}

window.initScript(useEffectSource, useStateSource);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

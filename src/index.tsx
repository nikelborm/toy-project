import ReactDOM from 'react-dom';
import '@fontsource/roboto';

import React, { useEffect as useEffectSource, useState as useStateSource } from 'react';
import App from './App';
import './index.css';
import './index.d';

if (process.env.NODE_ENV === 'development') {
  const closeWindow = () => console.log('mock closeWindow');

  const minimizeWindow = () => console.log('mock minimizeWindow');

  const useConnectionStatusBuild = (
    useEffect: typeof useEffectSource,
    useState: typeof useStateSource,
  ) => () => {
    const [isConnectionEstablished, setConnectionEstablished] = useState(false);
    useEffect(() => {
      const id = setInterval(
        () => {
          setConnectionEstablished((status) => !status);
        },
        1000,
      );
      return () => clearInterval(id);
    }, []);
    return {
      isConnectionEstablished,
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

const { ipcRenderer } = require('electron');

const closeWindow = () => {
  ipcRenderer.send('closeWindow');
  console.log('WOOOW!!! It is works as needed');
}

const minimizeWindow = () => {
  ipcRenderer.send('minimizeWindow');
  console.log('WOOOW!!! It is works as needed');
}

const useConnectionStatusBuild = (useEffect, useState) => () => {
  const [isConnectionEstablished, setConnectionEstablished] = useState(false);
  useEffect(() => {
    const listener = function (evt, message) {
      setConnectionEstablished(message);
    };
    ipcRenderer.addListener('newConnectionEstablishedStatus', listener);
    return () => {
      ipcRenderer.removeListener('newConnectionEstablishedStatus', listener)
    }
  }, [])
  return {
    isConnectionEstablished,
  }
}

window.initScript = (useEffect, useState) => {
  window._ = {
    closeWindow,
    minimizeWindow,
    useConnectionStatus: useConnectionStatusBuild(useEffect, useState),
  }
};

console.log('preloader');

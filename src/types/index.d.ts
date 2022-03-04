declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.png' {
  import React = require('react');

  export const ReactComponent: React.SFC<React.PNGProps<PNGElement>>;
  const src: string;
  export default src;
}

declare module globalThis {
  import type { ConnectionStatusType } from './connectionStatusType';

  interface Window {
    initScript: (useEffectArg: any, useStateArg: any) => void;
    _: {
      closeWindow: () => void;
      minimizeWindow: () => void;
      useConnectionStatus: () => {
        currentConnectionStatusType: ConnectionStatusType;
      };
    };
  }
}

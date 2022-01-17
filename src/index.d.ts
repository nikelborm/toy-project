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
  interface Window {
    _: {
      closeWindow: () => void;
      minimizeWindow: () => void;
    };
  }
}

window._ = {
  closeWindow: () => console.log('mock closeWindow'),
  minimizeWindow: () => console.log('mock minimizeWindow'),
};

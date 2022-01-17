import { FC } from 'react';
import { WindowCloseButtons } from './WindowCloseButtons';
import { ConnectButton } from './ConnectButton';
import { ConnectionStatus } from './ConnectionStatus';
import { WriteToDeviceButton } from './WriteToDeviceButton';
import { ReadFromDeviceButton } from './ReadFromDeviceButton';
import {
  WindowTitleWrapper,
  ToolboxWrapper,
} from './MainStyledComponents';

export const WindowTitle: FC = () => (
  <WindowTitleWrapper>
    <ConnectionStatus />
    <ToolboxWrapper>
      <ConnectButton />
      <WriteToDeviceButton />
      <ReadFromDeviceButton />
    </ToolboxWrapper>
    <WindowCloseButtons />
  </WindowTitleWrapper>
);

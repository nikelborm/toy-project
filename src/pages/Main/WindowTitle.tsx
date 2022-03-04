import { FC } from 'react';
import { DelimiterIcon } from '@assets';
import { WindowCloseButtons } from './WindowCloseButtons';
import { ConnectButton } from './ConnectButton';
import { ConnectionStatus } from './ConnectionStatus';
import { WriteToDeviceButton } from './WriteToDeviceButton';
import { ReadFromDeviceButton } from './ReadFromDeviceButton';
import {
  WindowTitleWrapper,
  ToolboxWrapper,
} from './MainStyledComponents';
import { PrintButton } from './PrintButton';
import { RecordAudioButton } from './RecordAudioButton';

export const WindowTitle: FC = () => (
  <WindowTitleWrapper>
    <ConnectionStatus />
    <ToolboxWrapper>
      <ConnectButton />
      <WriteToDeviceButton />
      <ReadFromDeviceButton />
      <DelimiterIcon />
      <PrintButton />
      <RecordAudioButton />
    </ToolboxWrapper>
    <WindowCloseButtons />
  </WindowTitleWrapper>
);

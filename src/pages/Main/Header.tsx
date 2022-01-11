import { FC } from 'react';
import { WindowCloseButtons } from './WindowCloseButtons';
import { ConnectButton } from './ConnectButton';
import { ConnectionStatus } from './ConnectionStatus';
import {
  HeaderWrapper,
} from './MainStyledComponents';

export const Header: FC = () => (
  <HeaderWrapper>
    <ConnectionStatus />
    <ConnectButton />
    <WindowCloseButtons />
  </HeaderWrapper>
);

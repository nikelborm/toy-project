import { FC } from 'react';
import {
  ConnectButtonIcon,
  ConnectButtonWrapper,
} from './MainStyledComponents';

export const ConnectButton: FC = () => (
  <ConnectButtonWrapper>
    <ConnectButtonIcon />
    Подключиться
  </ConnectButtonWrapper>
);

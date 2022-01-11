import { FC } from 'react';
import {
  ConnectionStatusWrapper,
  ConnectionStatusCircle,
  ConnectionStatusText,
} from './MainStyledComponents';

export const ConnectionStatus: FC = () => (
  <ConnectionStatusWrapper>
    <ConnectionStatusCircle />
    <ConnectionStatusText>
      Соединение не установлено
    </ConnectionStatusText>
  </ConnectionStatusWrapper>
);

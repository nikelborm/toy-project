import { FC } from 'react';
import {
  ConnectionStatusWrapper,
  ConnectionStatusCircle,
  ConnectionStatusText,
} from './MainStyledComponents';

export const ConnectionStatus: FC<{
  isConnectionEstablished?: boolean;
}> = ({ isConnectionEstablished }) => (
  <ConnectionStatusWrapper>
    <ConnectionStatusCircle isConnectionEstablished={isConnectionEstablished} />
    <ConnectionStatusText>
      Соединение
      {
        isConnectionEstablished
          ? ' успешно '
          : ' не '
      }
      установлено
    </ConnectionStatusText>
  </ConnectionStatusWrapper>
);

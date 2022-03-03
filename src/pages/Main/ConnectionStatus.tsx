import { FC } from 'react';
import {
  ConnectionStatusWrapper,
  ConnectionStatusCircle,
  ConnectionStatusText,
} from './MainStyledComponents';

export const ConnectionStatus: FC = () => {
  const { isConnectionEstablished } = window._.useConnectionStatus();
  console.log('window._.useConnectionStatus: ', window._.useConnectionStatus);

  return (
    <ConnectionStatusWrapper>
      <ConnectionStatusCircle isConnectionEstablished={isConnectionEstablished} />
      <ConnectionStatusText>
        Соединение
        {isConnectionEstablished
          ? ' успешно '
          : ' не '}
        установлено
      </ConnectionStatusText>
    </ConnectionStatusWrapper>
  );
};

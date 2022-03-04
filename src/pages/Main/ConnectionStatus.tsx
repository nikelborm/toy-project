import { FC } from 'react';
import { ConnectionStatusType } from 'src/types';
import {
  ConnectionStatusWrapper,
  ConnectionStatusCircle,
  ConnectionStatusText,
} from './MainStyledComponents';

const сonnectionStatusCircleColorMap: {
  [key in ConnectionStatusType]: string;
} = {
  [ConnectionStatusType.NOT_CONNECTED]: '#DA4F4F',
  [ConnectionStatusType.IN_PROGRESS]: '#D5D934',
  [ConnectionStatusType.READY]: '#53D27E',
};

const сonnectionStatusTextMap: {
  [key in ConnectionStatusType]: string;
} = {
  [ConnectionStatusType.NOT_CONNECTED]: 'Соединение не установлено',
  [ConnectionStatusType.IN_PROGRESS]: 'Идёт установка соединения',
  [ConnectionStatusType.READY]: 'Соединение успешно установлено',
};

export const ConnectionStatus: FC = () => {
  const { currentConnectionStatusType } = window._.useConnectionStatus();
  console.log('window._.useConnectionStatus: ', window._.useConnectionStatus);

  return (
    <ConnectionStatusWrapper>
      <ConnectionStatusCircle
        currentConnectionStatusType={currentConnectionStatusType}
        colorMap={сonnectionStatusCircleColorMap}
      />
      <ConnectionStatusText>
        { currentConnectionStatusType in сonnectionStatusTextMap
          // @ts-ignore блять, не понимаю, дерьмо какое-то
          ? сonnectionStatusTextMap[currentConnectionStatusType]
          : 'Статус неизвестен'}
      </ConnectionStatusText>
    </ConnectionStatusWrapper>
  );
};

import { CloseWindowIcon, MinimizeWindowIcon } from '@assets';
import { FC } from 'react';
import { CircleButton, WindowCloseButtonsWrapper } from './MainStyledComponents';

export const WindowCloseButtons: FC = () => (
  <WindowCloseButtonsWrapper>
    <CircleButton
      title="Скрыть"
      color="#A7E0A5"
      onClick={() => window._.minimizeWindow()}
    >
      <MinimizeWindowIcon />
    </CircleButton>
    <CircleButton
      title="Закрыть"
      color="#FA7470"
      onClick={() => window._.closeWindow()}
    >
      <CloseWindowIcon />
    </CircleButton>
  </WindowCloseButtonsWrapper>
);

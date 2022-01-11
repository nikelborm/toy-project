import { FC } from 'react';
import { CircleButton, WindowCloseButtonsWrapper } from './MainStyledComponents';

export const WindowCloseButtons: FC = () => (
  <WindowCloseButtonsWrapper>
    <CircleButton color="#A7E0A5" />
    <CircleButton color="#FFFF7A" />
    <CircleButton color="#FA7470" />
  </WindowCloseButtonsWrapper>
);

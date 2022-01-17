import { FC } from 'react';
import { WindowWrapper } from './MainStyledComponents';
import { WindowTitle } from './WindowTitle';
import { WindowContent } from './WindowContent';

export const MainPage: FC<any> = () => (
  <WindowWrapper>
    <WindowTitle />
    <WindowContent />
  </WindowWrapper>
);

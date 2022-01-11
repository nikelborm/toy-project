import { FC } from 'react';
import { WindowWrapper } from './MainStyledComponents';
import { Header } from './Header';
import { WindowContent } from './WindowContent';

export const MainPage: FC<any> = () => (
  <WindowWrapper>
    <Header />
    <WindowContent />
  </WindowWrapper>
);

import { FC } from 'react';
import { WindowContentWrapper } from './MainStyledComponents';
import { AudioLibrary } from './AudioLibrary';
import { AudioRecorder } from './AudioRecorder';
import { AudioCardsSheetNavigation } from './AudioCardsSheetNavigation';
import { AudioCardsSheet } from './AudioCardsSheet';
import { DeviceManagementBar } from './DeviceManagementBar';

export const WindowContent: FC = () => (
  <WindowContentWrapper>
    <AudioLibrary />
    <AudioRecorder />
    <AudioCardsSheetNavigation />
    <AudioCardsSheet />
    {/* <DeviceManagementBar /> */}
  </WindowContentWrapper>
);

import { FC } from 'react';
import { DeviceManagementBarWrapper } from './MainStyledComponents';
import { ReadFromDeviceButton } from './ReadFromDeviceButton';
import { WriteToDeviceButton } from './WriteToDeviceButton';

export const DeviceManagementBar: FC = () => (
  <DeviceManagementBarWrapper>
    <WriteToDeviceButton />
    <ReadFromDeviceButton />
  </DeviceManagementBarWrapper>
);

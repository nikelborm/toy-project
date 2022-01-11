import { FC } from 'react';
import {
  WriteToDeviceButtonIcon,
  WriteToDeviceButtonWrapper,
} from './MainStyledComponents';

export const WriteToDeviceButton: FC = () => (
  <WriteToDeviceButtonWrapper>
    <WriteToDeviceButtonIcon />
    Записать на устройство
  </WriteToDeviceButtonWrapper>
);

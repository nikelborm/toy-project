import { FC } from 'react';
import {
  ReadFromDeviceButtonIcon,
  ReadFromDeviceButtonWrapper,
} from './MainStyledComponents';

export const ReadFromDeviceButton: FC = () => (
  <ReadFromDeviceButtonWrapper>
    <ReadFromDeviceButtonIcon />
    Прочитать с устройства
  </ReadFromDeviceButtonWrapper>
);

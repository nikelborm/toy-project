import { FC } from 'react';
import {
  PrintButtonIcon,
  PrintButtonWrapper,
} from './MainStyledComponents';

export const PrintButton: FC = () => (
  <PrintButtonWrapper>
    <PrintButtonIcon />
    Печать карточки
  </PrintButtonWrapper>
);

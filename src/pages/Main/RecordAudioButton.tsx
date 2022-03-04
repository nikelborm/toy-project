import { FC } from 'react';
import {
  RecordAudioButtonIcon,
  RecordAudioButtonWrapper,
} from './MainStyledComponents';

export const RecordAudioButton: FC = () => (
  <RecordAudioButtonWrapper>
    <RecordAudioButtonIcon />
    Запись аудио
  </RecordAudioButtonWrapper>
);

import { AudioSpeakerIcon } from '@assets';
import { FC } from 'react';
import { MediaImporter } from './MediaImporter';

export const AudioImporter: FC = () => (
  <MediaImporter
    leftMarginPx={0}
  >
    <AudioSpeakerIcon />
  </MediaImporter>
);

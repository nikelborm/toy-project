import { PictureIcon } from '@assets';
import { FC } from 'react';
import { MediaImporter } from './MediaImporter';

export const PictureImporter: FC = () => (
  <MediaImporter
    leftMarginPx={330}
  >
    <PictureIcon />
  </MediaImporter>
);

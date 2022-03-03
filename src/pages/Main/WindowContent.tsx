import { FC } from 'react';
import { WindowContentWrapper } from './MainStyledComponents';
import { AudioLibrary } from './AudioLibrary';
import { AudioImporter } from './AudioImporter';
import { PictureLibrary } from './PictureLibrary';
import { PictureImporter } from './PictureImporter';
import { AudioCardsSheetNavigation } from './AudioCardsSheetNavigation';
import { AudioCardsSheet } from './AudioCardsSheet';

export const WindowContent: FC = () => (
  <WindowContentWrapper>

    <AudioLibrary />
    <AudioImporter />

    <PictureLibrary />
    <PictureImporter />

    <AudioCardsSheetNavigation />
    <AudioCardsSheet />

  </WindowContentWrapper>
);

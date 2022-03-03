import { FC } from 'react';
import {
  AddMediaIcon,
  MediaImporterBottomText,
  MediaImporterUpperText,
  MediaImporterWrapper,
  MediaTypeIconWrapper,
} from './MainStyledComponents';

export const MediaImporter: FC<{
  leftMarginPx: number;
}> = ({ leftMarginPx, children }) => (
  <MediaImporterWrapper leftMarginPx={leftMarginPx}>
    <MediaImporterUpperText>
      Перетащите в эту область
    </MediaImporterUpperText>
    <AddMediaIcon />
    <MediaTypeIconWrapper>
      {children}
    </MediaTypeIconWrapper>
    <MediaImporterBottomText>
      Нажмите чтобы выбрать
    </MediaImporterBottomText>
  </MediaImporterWrapper>
);

import { FC } from 'react';
import { AudioCard } from './AudioCard';
import { AudioCardsSheetWrapper } from './MainStyledComponents';

export const AudioCardsSheet: FC = () => (
  <AudioCardsSheetWrapper>
    <AudioCard />
    <AudioCard />
    <AudioCard />
    <AudioCard />
    <AudioCard />
    <AudioCard />
    <AudioCard />
    <AudioCard />
    <AudioCard />
  </AudioCardsSheetWrapper>
);

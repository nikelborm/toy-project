import { ArrowLeftIcon, ArrowRightIcon } from '@assets';
import { FC } from 'react';
import {
  SheetNavLeftButton,
  SheetNavRightButton,
  SheetNavWrapper,
} from './MainStyledComponents';
import { SheetNumberList } from './SheetNumberList';

export const AudioCardsSheetNavigation: FC = () => (
  <SheetNavWrapper>
    <SheetNavLeftButton>
      <ArrowLeftIcon />
    </SheetNavLeftButton>
    <SheetNumberList />
    <SheetNavRightButton>
      <ArrowRightIcon />
    </SheetNavRightButton>
  </SheetNavWrapper>
);

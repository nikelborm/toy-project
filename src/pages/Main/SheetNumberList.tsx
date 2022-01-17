import { PlusIcon } from '@assets';
import { FC, useState } from 'react';
import { SheetNavButton, SheetNumberListWrapper } from './MainStyledComponents';

export const SheetNumberList: FC = () => {
  const [numbers, setNumbers] = useState(
    Array.from(
      { length: 1 },
      () => ({}),
    ),
  );
  return (
    <SheetNumberListWrapper>
      {numbers.map(
        (e, index) => (
          <SheetNavButton>
            {index}
          </SheetNavButton>
        ),
      )}
      <SheetNavButton
        onClick={
          () => {
            setNumbers((prevNumbers) => [...prevNumbers, {}]);
          }
        }
      >
        <PlusIcon />
      </SheetNavButton>
    </SheetNumberListWrapper>
  );
};

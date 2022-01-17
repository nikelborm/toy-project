import { FC } from 'react';
import { AudioCardWrapper } from './MainStyledComponents';

export const AudioCard: FC = (props) => (
  <AudioCardWrapper>
    asd
    <audio src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3">
      <track kind="captions" {...props} />
    </audio>
  </AudioCardWrapper>
);

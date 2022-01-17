import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

class AudioCardSheetsService {
  private readonly newStateEvent = `AudioCardSheets__${nanoid()}`;

  private state: AudioCardSheetsState = {
    audioCardSheets: [],
  };

  subscribeForNewState(stateUpdateCallback: (audioCardSheets: AudioCardSheet[]) => any) {
    const listener = () => {
      stateUpdateCallback(this.state.audioCardSheets);
    };
    window.addEventListener<any>(this.newStateEvent, listener);
    return () => window.removeEventListener<any>(this.newStateEvent, listener);
  }

  private readonly setState = (newState: AudioCardSheetsState) => {
    window.dispatchEvent(new CustomEvent(this.newStateEvent));
    this.state = newState;
  };

  createAudioCardSheet() {
    this.setState({
      audioCardSheets: [...this.state.audioCardSheets, {
        0: { voice: null, picture: null },
        1: { voice: null, picture: null },
        2: { voice: null, picture: null },
        3: { voice: null, picture: null },
        4: { voice: null, picture: null },
        5: { voice: null, picture: null },
        6: { voice: null, picture: null },
        7: { voice: null, picture: null },
        8: { voice: null, picture: null },
      }],
    });
  }
}

const audioCardSheetsService = new AudioCardSheetsService();

type AudioCardSheetsState = {
  audioCardSheets: AudioCardSheet[];
};

interface AudioCardSheet {
  0: AudioCard;
  1: AudioCard;
  2: AudioCard;
  3: AudioCard;
  4: AudioCard;
  5: AudioCard;
  6: AudioCard;
  7: AudioCard;
  8: AudioCard;
}

interface AudioCard {
  voice: string | null;
  picture: string | null;
}

export function useAudioCardSheets() {
  const [state, setstate] = useState<undefined | AudioCardSheet[]>(undefined);
  useEffect(() => audioCardSheetsService.subscribeForNewState(setstate), []);
  return state;
}

export const createAudioCardSheet = () => audioCardSheetsService.createAudioCardSheet();

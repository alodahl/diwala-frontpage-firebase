import { LOAD_TEXTS } from '../reducers/texts';

export const loadTexts = (texts: any) => {
  return {
    type: LOAD_TEXTS,
    texts
  };
};

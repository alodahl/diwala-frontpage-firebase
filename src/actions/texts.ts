import { LOAD_TEXTS } from '../reducers/text';

export const loadTexts = (texts: any) => {
  return {
    type: LOAD_TEXTS,
    texts
  };
};

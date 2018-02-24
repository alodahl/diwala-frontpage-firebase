export const LOAD_TEXTS = 'LOAD_TEXTS';

const texts = (state = [], action: any) => {
  switch (action.type) {
    case LOAD_TEXTS:
      if (!action.texts) {
        return state;
      }
      return action.texts;
    default:
      return state;
  }
};

export default texts;

export const InitialTextState = [];

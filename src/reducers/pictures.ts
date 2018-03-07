export const LOAD_PICTURES = 'LOAD_PICTURES';

const pictures = (state = [], action: any) => {
  switch (action.type) {
    case LOAD_PICTURES:
      if (!action.pictures) {
        return state;
      }
      return action.pictures;
    default:
      return state;
  }
};

export default pictures;

export const InitialPictureState = [];

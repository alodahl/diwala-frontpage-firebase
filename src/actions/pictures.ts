import { LOAD_PICTURES } from '../reducers/pictures';

export const loadPictures = (pictures: any) => {
  return {
    type: LOAD_PICTURES,
    pictures
  };
};

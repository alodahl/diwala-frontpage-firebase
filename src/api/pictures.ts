import pullPictures from '../service/pictures';
import { SanityData } from './sanity';

export default function getPictures(dispatch: any, action: any) {
  return pullPictures(dispatch, action);
}

export interface Image {
  asset: {
    _ref: string;
    _type: string;
  };
  _type: string;
}

export interface PictureData extends SanityData {
  alt: string;
  copyrightImage: Image;
  image: Image;
  longdesc: string;
  name: string;
}
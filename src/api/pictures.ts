import pullPictures from '../service/pictures';
import { SanityImageData, SanityData } from './sanity';

export default function getPictures(dispatch: any, action: any) {
  return pullPictures(dispatch, action);
}

export interface PictureData extends SanityData {
  alt: string;
  copyrightImage: SanityImageData;
  image: SanityImageData;
  longdesc: string;
  name: string;
}
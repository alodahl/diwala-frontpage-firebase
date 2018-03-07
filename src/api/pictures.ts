import pullPictures from '../service/pictures';

export default function getPictures(dispatch: any, action: any) {
  return pullPictures(dispatch, action);
}
import pullTexts from '../service/texts';

export default function getTexts(dispatch: any, action: any) {
  return pullTexts(dispatch, action);
}

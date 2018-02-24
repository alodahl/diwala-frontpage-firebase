import pullText from '../service/text';

export default function getTexts(dispatch: any, action: any) {
  return pullText(dispatch, action);
}

import pullTexts from '../service/texts';

export default function getTexts(dispatch: any, action: any) {
  return pullTexts(dispatch, action);
}

export interface TextData {
  id: string;
  value: TextLabel[];
}

export interface TextLabel {
  label: string;
  value: string;
}
import * as React from 'react';
import Scrollchor from 'react-scrollchor';
import { TextData } from '../../../api/texts';

const findRightText = (texts: any, id: string) => {
    const textObj = texts.value.find((text: any) => {
      return text.label === id;
    });
    return textObj ? textObj.value : '';
};

const Label = (props: { text: string }) => {
  return (
    <div className="button-label">
      {props.text}
    </div>
  );
};

export default function LabeledScrollToButton(props: {
  text: TextData,
  textId: string,
  invert?: any,
  id: string,
  labelId: string,
  horisontalPosition?: string,
  verticalPosition?: string
 }) {
  const invertButton = props.invert ? 'button--invert' : 'button';
  console.log(props.text);
  const buttonText = findRightText(props.text, props.textId);
  const labelText = findRightText(props.text, props.labelId);
  const horisontalPosition = props.horisontalPosition ? `__${props.horisontalPosition}` : '__left';
  const verticalPosition = props.verticalPosition ? `__${props.verticalPosition}` : '__center';

  return (
    <div className={`labeledScrollToButton labeledScrollToButton${horisontalPosition} labeledScrollToButton${verticalPosition}`}>
      <Label text={labelText} />
      <Scrollchor to={props.id} animate={{offset: 20, duration: 600}}>
        <div className={`${invertButton}`}>{buttonText}</div>
      </Scrollchor>
    </div>
  );
}

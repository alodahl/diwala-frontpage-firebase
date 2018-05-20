import * as React from 'react';
import Scrollchor from 'react-scrollchor';
import { TextData } from '../../../api/texts';

export default function ScrollToButton(props: { text: TextData, textId: String, invert?: any, id: String }) {
  const invertButton = props.invert ? 'button--invert' : 'button';
  const textObj = props.text.value.find((text: any) => {
    return text.label === props.textId;
  });
  const buttonText = textObj ? textObj.value : '';
  return (
    <Scrollchor to={props.id} animate={{offset: 20, duration: 600}}>
      <div className={`${invertButton}`}>{buttonText}</div>
    </Scrollchor>
  );
}

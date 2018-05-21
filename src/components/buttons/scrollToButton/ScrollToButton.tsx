import * as React from 'react';
import Scrollchor from 'react-scrollchor';
import { TextData } from '../../../api/texts';

interface ScrollButtonProps {
  text: TextData;
  textId: string;
  id: string;
  offset?: number;
  duration?: number;
  invert?: any;
}

const ScrollToButton: React.SFC<ScrollButtonProps> = (props) => {
  const invertButton = props.invert ? 'button--invert' : 'button';
  const textObj = props.text.value.find((text: any) => {
    return text.label === props.textId;
  });
  const buttonText = textObj ? textObj.value : '';
  return (
    <Scrollchor to={props.id} animate={{offset: props.offset, duration: props.duration}}>
      <div className={`${invertButton}`}>{buttonText}</div>
    </Scrollchor>
  );
};

ScrollToButton.defaultProps = {
  duration: 600
};

export default ScrollToButton;

import * as React from 'react';
import { TextData } from '../../api/texts';

export default function Hero(props: { text: TextData, textId: string, tokenVersion?: string }) {
  const tokenTextObj = props.text.value.find((text: any) => {
    return text.label === props.textId;
  });
  const tokenText = tokenTextObj ? tokenTextObj.value : '';
  return (
    <div className="website-hero">
      <div className={`website-hero__logo ${props.tokenVersion}`}>
        <div className="website-hero__text">
          {tokenText}
        </div>
      </div>
    </div>
  );
}

import * as React from 'react';
import { TextData } from '../../api/texts';

export default function Hero(props: { text: TextData, textId: string, tokenVersion?: string }) {
  const tokenTextObj = props.text.value.find((text: any) => {
    return text.label === props.textId;
  });
  const tokenText = tokenTextObj ? tokenTextObj.value : '';
  const videoToken = require('../../graphics/diwala_token.mp4');
  const v = document.getElementsByTagName('video')[0];
  function playVideo() {
      v.play();
  }
  function stopVideo() {
      v.pause();
  }

  return (
    <div className="website-hero" onMouseOver={() => playVideo()} onMouseOut={() => stopVideo()} >
      <video className="website-hero__video" loop preload="true">
        <source src={videoToken} type="video/mp4" />
      </video>
      <div className={`website-hero__logo ${props.tokenVersion}`}>
        <div className="website-hero__text">
          {tokenText}
        </div>
      </div>
    </div>
  );
}

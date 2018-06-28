import * as React from 'react';
import { TextData } from '../../api/texts';

export default function Hero(props: { text: TextData, textId: string, tokenVersion?: string }) {
  const tokenTextObj = props.text.value.find((text: any) => {
    return text.label === props.textId;
  });
  const tokenText = tokenTextObj ? tokenTextObj.value : '';
  const videoTokenLg = require('../../graphics/diwala_token_large.mp4');
  const videoTokenSm = require('../../graphics/diwala_token_small.mp4');
  const v = document.getElementsByTagName('video')[0];

  function videoUrl() {
    let videoToken;
    if (window.innerWidth < 1200) {
      videoToken = videoTokenSm;
    } else {
      videoToken = videoTokenLg;
    }
    if (props.tokenVersion === 'purple') {
      return videoToken + '#t=00:00:00.5';
    } else {
      return videoToken;
    }
  }

  function playVideo() {
    if (v) {
      v.play();
    } else {
      setTimeout(playVideo(), 100);
    }
  }

  function stopVideo() {
      v.pause();
  }

  return (
    <div className="website-hero" onMouseOver={() => playVideo()} onMouseOut={() => stopVideo()} >
      <video className="website-hero__video" loop playsInline autoPlay preload="true">
        <source src={videoUrl()} type="video/mp4" />
      </video>
      <div className={`website-hero__logo ${props.tokenVersion}`}>
        <div className="website-hero__text">
          {tokenText}
        </div>
      </div>
    </div>
  );
}

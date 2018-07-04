import * as React from 'react';
import { TextData } from '../../api/texts';

export default function Hero(props: { text: TextData, textId: string, tokenVersion?: string }) {
  const tokenTextObj = props.text.value.find((text: any) => {
    return text.label === props.textId;
  });
  const tokenText = tokenTextObj ? tokenTextObj.value : '';
  const videoTokenLg = require('../../graphics/Diwala_Animation_5M.mp4');
  const videoTokenSm = require('../../graphics/Diwala_Animation_840K.mp4');

  function findVideo() {
    document.getElementsByTagName('video');
  }

  let video = document.getElementsByTagName('video')[0];
  let playing = true;

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
    if (video.readyState > 1) {
      if (!video) {
        setTimeout(findVideo(), 300);
        video = document.getElementsByTagName('video')[0];
      }
      video.play();
      playing = true;
    }
  }

  function stopVideo() {
    if ((video.readyState > 1) && (playing)) {
      video.pause();
      playing = false;
    }
  }

  return (
    <div className="website-hero" onMouseOver={() => playVideo()} onMouseOut={() => stopVideo()} >
      <video className="website-hero__video" loop playsInline autoPlay preload="true">
        <source className="website-hero__video-source" src={videoUrl()} type="video/mp4" />
      </video>
      <div className="website-hero__background-image"/>
      <div className={`website-hero__logo ${props.tokenVersion}`}>
        <div className="website-hero__text">
          {tokenText}
        </div>
      </div>
    </div>
  );
}

import * as React from 'react';
import MediaSlider from '../media_slider/MediaSlider';

export default function News() {

  return (
    <div className="news-container">
      <h2 className="news__title--h1 title">
        Media <span className="news__title-wrap">&amp; Press</span>
      </h2>
      <MediaSlider />
    </div>
  );

}

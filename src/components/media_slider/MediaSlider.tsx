
import * as React from 'react';
import Slider from 'react-slick';
import NewsItem from '../news_item/NewsItem';
import { NewsData } from '../../api/news';

export default function MediaSlider(props: {news: NewsData[]}) {

    var settings = {
      dots: true,
      dotsClass: 'slick-dots',
      centerMode: true,
      speed: 200,
      slidesToShow: 3,
      variableWidth: true,
      multipleItems: true,
      focusOnSelect: true,
      focusOnChange: true,
      touchMove: true,
      mobileFirst: true,
      touchThreshold: 8
    };

    const newsItems = props.news.map((newsItem, index) => {
            return (<NewsItem news={newsItem} key={index} />);
    });

    async function showMenuToken() {
      try {
        await document.getElementsByClassName('slick-dots')[0].childNodes[2];
        const centerDot =  await document.getElementsByClassName('slick-dots')[0].childNodes[2] as HTMLElement;
        await centerDot.classList.add('default-active');
        await document.getElementsByClassName('media-slider')[0].addEventListener('change', () => { centerDot.classList.remove('default-active'); });
        return;
      } catch (err) {
        console.log('Error: ', err.message);
      }
    }

    async function tryLoadingToken() {
      if (document.getElementsByClassName('slick-dots').length > 0) {
        showMenuToken();
      } else {
        setTimeout(() => showMenuToken(), 1000);
      }
    }

    tryLoadingToken();

    return (
      <Slider className="media-slider" {...settings}>
          {newsItems}
          {(newsItems.length < 3) ? newsItems : null}
      </Slider>
    );

}

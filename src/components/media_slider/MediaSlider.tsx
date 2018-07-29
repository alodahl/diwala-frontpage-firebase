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
        const centerDot =  await document.getElementsByClassName('slick-dots')[0].childNodes[2].childNodes[0] as HTMLElement;
        await centerDot.classList.add('showToken');
        await document.getElementsByClassName('media-slider')[0].addEventListener('click', () => { centerDot.classList.remove('showToken'); });
        console.log(centerDot);
        return;
      } catch (err) {
        console.log('Error: ', err.message);
      }
    }

    setTimeout(showMenuToken(), 1000);

    return (
      <Slider className="media-slider" {...settings}>
          {newsItems}
          {(newsItems.length < 3) ? newsItems : null}
      </Slider>
    );

}

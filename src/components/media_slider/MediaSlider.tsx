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

    return (
      <Slider className="media-slider" {...settings}>
          {newsItems}
          {(newsItems.length < 3) ? newsItems : null}
      </Slider>
    );

}

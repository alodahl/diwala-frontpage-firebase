import * as React from 'react';
import Slider from 'react-slick';
import NewsItem from '../news_item/NewsItem';
import { NewsData } from '../../api/news';

export default function MediaSlider(props: {news: NewsData[]}) {

    var settings = {
      dots: true,
      dotsClass: 'slick-dots',
      centerMode: true,
      centerPadding: '20px',
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      multipleItems: true,
      focusOnSelect: true,
      focusOnChange: true,
      accessibility: true,
      draggable: true,
      touchMove: true,
      mobileFirst: true
    };

    return (
      <Slider className="media-slider" {...settings}>
          <NewsItem news={props.news}/>
      </Slider>
    );

}

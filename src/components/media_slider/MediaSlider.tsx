
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
        await document.getElementsByClassName('slick-dots')[0].childNodes[0];
        const slickDotsList = await document.getElementsByClassName('slick-dots')[0].childNodes;
        const activeDot =  await document.getElementsByClassName('slick-active')[0] as HTMLElement;
        const initialDot =  slickDotsList[slickDotsList.length - 3] as HTMLElement;
        await initialDot.classList.add('default-active');
        let hideDefaultToken = function () {
          // if (initialDot !== activeDot) {
            initialDot.classList.remove('default-active');
          // }
        };
        if (initialDot === activeDot) {
          hideDefaultToken();
        }

        // await document.getElementsByClassName('media-slider')[0].addEventListener('change', hideDefaultToken);
        // await document.getElementsByClassName('newsItem')[0].addEventListener('change', hideDefaultToken);
        // await document.getElementsByClassName('slick-dots')[0].addEventListener('click', hideDefaultToken);
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

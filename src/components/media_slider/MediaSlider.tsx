
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
      touchThreshold: 10
    };

    const newsItems = props.news.map((newsItem, index) => {
            return (<NewsItem news={newsItem} key={index} />);
    });

    async function showMenuToken() {
      try {
        const newsItemList = await document.getElementsByClassName('newsItem');
        const dotList = await document.getElementsByClassName('slick-dots')[0].childNodes;
        const defaultDot =  dotList[dotList.length - 3] as HTMLElement;
        await defaultDot.classList.add('default-active');
        let hideDefaultToken = function () {defaultDot.classList.remove('default-active'); };

        for (let i = 0; i < document.getElementsByClassName('newsItem').length; i++) {
          newsItemList[i].addEventListener('click', hideDefaultToken);
          dotList[i].addEventListener('click', hideDefaultToken);
          newsItemList[i].addEventListener('touchend', hideDefaultToken);
          dotList[i].addEventListener('touchend', hideDefaultToken);
        }
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

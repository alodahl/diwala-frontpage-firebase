import * as React from 'react';
import { urlFor } from '../../core/utilities/image-builder.functions';
import { NewsData } from '../../api/news';

export default function NewsItem(props: {news: NewsData[]}) {

  const newsItems = props.news.map((newsItem, key) => {
    const url = urlFor(newsItem.logo).url();
    return (
       <li key={newsItem._id} className="newsItem__list-item">
           <div className="newsItem__section">
             <a href={newsItem.url}>
               <img className="newsItem__logo" src={url}/>
             </a>
           </div>
           <div className="newsItem__section">
             <a href={newsItem.url}>
               <blockquote className="newsItem__quote">{newsItem.quote}</blockquote>
             </a>
           </div>
       </li>
      );
  });

  return (
    <div className="newsItem">
      <ul>
      {newsItems}
      </ul>
    </div>
  );

}

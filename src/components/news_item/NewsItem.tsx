import * as React from 'react';

export default function NewsItem() {

  // let newsItems = props.map((news: any[]) => {
  //   return (
  //     <li key={partner._id} className="news__list-item">
  //       <a href={props.url}>
  //         <div className="newsitem__section">
  //           <img className="newsitem__logo" src={props.logo}/>
  //         </div>
  //         <div className="newsitem__section">
  //           <blockquote className="newsitem__quote">{props.quote}</blockquote>
  //         </div>
  //       </a>
  //     </li>
  //   );
  // });

  return (
    <div className="newsitem">
      <li className="newsitem__list-item">
        {/* key={partner._id} */}
          <div className="newsitem__section">
            <a href="google.com">
              <img className="newsitem__logo" src="http://www.pngall.com/wp-content/uploads/2016/06/Superman-Logo-Free-Download-PNG.png"/>
            </a>
          </div>
          <div className="newsitem__section">
            <a href="google.com">
              <blockquote className="newsitem__quote">jkbfvk kjdbfkl vjbw; kbjv kjwdvk lkjd uehvkljwbv. kjdbfkl vjbw; kbjv kjwdvk lkjd uehvkljwbv</blockquote>
            </a>
          </div>
      </li>
      {/* {newsItems} */}
    </div>
  );

}

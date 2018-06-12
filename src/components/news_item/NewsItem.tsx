import * as React from 'react';

export default function NewsItem(props: any) {

  return (
    <div className="newsitem">
      <div className="newsitem__section">
        <img className="newsitem__logo" src={props.logoUrl}/>
      </div>
      <div className="newsitem__section">
        <blockquote className="newsitem__quote">{props.quote}</blockquote>
      </div>
    </div>
  );

}

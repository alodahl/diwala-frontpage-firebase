import * as React from 'react';

export default function BlogItem(props: any) {

  return (
  <li className="blog-item">
      <div className="blog-item__section">
        <a href={props.blog.url} target="_blank">
          <img className="blog-item__image" src={props.blog.image}/>
        </a>
      </div>
      <div className="blog-item__section">
          <p className="blog-item__text">{props.blog.text}</p>
      </div>
  </li>
  );

}

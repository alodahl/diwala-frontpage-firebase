import * as React from 'react';
import { sanityClient } from '../../service/sanity';
import imageUrlBuilder from '@sanity/image-url';

export default function BlogItem(props: any) {
  console.log(props);
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source: any) {
    return builder.image(source);
  }
  const background = {
    backgroundImage: 'url(' + urlFor(props.menuphoto).width(200).url() + ')'
  };
  return (
    <div className="blog-item" style={background} onClick={props.onClick}>
      <h1 className="blog-item__title">{props.title}</h1>
      <h2 className="blog-item__author">{props.author}</h2>
      <h2 className="blog-item__date"><em>{props.date}</em></h2>
    </div>
  );

}

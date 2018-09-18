import * as React from 'react';
import * as BlockContent from '@sanity/block-content-to-react';
// const BlockContent = require('@sanity/block-content-to-react');
import { sanityClient } from '../../service/sanity';
import { BlogData } from '../../api/blog';
// import imageUrlBuilder from '@sanity/image-url';

export default function BlogItem(props: BlogData) {
  console.log('Blog Data:', props);
  // const builder = imageUrlBuilder(sanityClient);
  // function urlFor(source: any) {
  //   return builder.image(source);
  // }
  // for ( let i = 0; i < props.body.length; i++ ) {
  //   if (props.body[i].type === 'image') {
  //     props.body[i] = '<img src=' + urlFor(props.body[i]).url() + '/>';
  //   }
  // }
  // const path = window.location.pathname;
  //  const article = getArticle();
  //  function getArticle(){
  //    for(let i=0; i < BlogData.length; i++){
  //      if(path === BlogData[i].path) {
  //        return BlogData[i];
  //      }
  //    }
  //  }
  return (
    <div className="blog-post">
      <h1 className="blog-item__title">{props.title}</h1>
      <h2 className="blog-item__author">{props.author}</h2>
      <h2 className="blog-item__date">{props.date}</h2>
      <BlockContent
        blocks={props.body}
        projectId={sanityClient.projectId}
        dataset={sanityClient.dataset}
      />
    </div>
    );

}

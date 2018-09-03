import * as React from 'react';
import * as BlockContent from '@sanity/block-content-to-react';
import { sanityClient } from '../../service/sanity';
import { BlogData } from '../../api/blog';

export default function BlogItem(props: BlogData) {
  console.log(props);
  return (
  <div className="blog-item">
    BLOGBLOGBLOG
    <h1 className="blog-item__title">{props.title}</h1>
    <h2 className="blog-item__author">{props.author}</h2>
    <BlockContent
      blocks={props.body}
      projectId={sanityClient.projectId}
      dataset={sanityClient.dataset}/>
  </div>
  );

}

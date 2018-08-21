import * as React from 'react';
import BlogItem from '../blog-item/BlogItem';
import { BlogData } from '../../api/blog';

export default function Blog(props: {blog: BlogData[]}) {

  const blogList = props.blog.map((blogItem, index) => {
          return (<BlogItem { ...blogItem } />);
  });

  return (
    <div className="blog-container">
      <h2 className="blog__title--h1 title">
        Blog
      </h2>
      {blogList}
    </div>
  );

}

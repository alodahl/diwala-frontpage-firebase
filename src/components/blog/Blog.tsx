import * as React from 'react';
import { connect } from 'react-redux';
import { loadBlog } from '../../actions/blog';
import BlogItem from '../blog-item/BlogItem';
import getBlog, { BlogData } from '../../api/blog';

class MainBox extends React.Component {
  public props: {
    blog: BlogData[]
  };

  constructor(props: any) {
    super(props);
    props.getBlog(loadBlog);
  }

  public render() {
    console.log(this.props);
    const parentClass = 'Blog';
    const blogList = this.props.blog.map((blogItem, index) => {
            return (<BlogItem {...blogItem} key={index}/>);
    });
    console.log(this.props);

    return (
      <div className={parentClass}>
        <div className="blog-container">
          <h2 className="blog__title--h1 title">
            Diwala Blog
          </h2>
          {blogList}
        </div>
      </div>
    );
  }
}

const mapApiToState = (dispatch: any) => {
  return {
    getBlog: (action: any) => getBlog(dispatch, action),
  };
};

const ConnectedMainBox = connect(
  state => state,
  mapApiToState
)(MainBox);

export default ConnectedMainBox;

import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadBlog } from '../../actions/blog';
import BlogItem from '../blog-item/BlogItem';
import BlogPost from '../blog-post/BlogPost';
import getBlog, { BlogData } from '../../api/blog';

class Blog extends React.Component<any, any> {

  public props: {
    blog: BlogData[]
  };

  constructor(props: any) {
    super(props);
    props.getBlog(loadBlog);
    this.state = {
      blogPost: '',
      cardClicked: false
    };
  }

  public showBlogPost(e: any, blogInfo: any) {
    e.preventDefault();
    console.log('showBlogPost', blogInfo);
    this.setState({
      cardClicked: true,
      blogPost: blogInfo
    });
  }

  public render() {
    console.log(this.props);
    const parentClass = 'Blog';
    const blogList = this.props.blog.map((postInfo, index) => {
            return (
              <Link key={index} to={`/blog/${postInfo.path}`} >
                <BlogItem {...postInfo} key={index} onClick={(e: Event) => this.showBlogPost(e, postInfo)} />
              </Link>);
    });

    return (
      <div className={parentClass}>
        <div className="blog-container">
          <h2 className="blog__title--h1 title">
            Diwala Blog
          </h2>
          {this.state.cardClicked ? <BlogPost {...this.state.blogPost} /> : blogList}
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

const ConnectedBlog = connect(
  state => state,
  mapApiToState
)(Blog);

export default ConnectedBlog;

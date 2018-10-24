import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadBlog } from '../../actions/blog';
import BlogItem from '../blog-item/BlogItem';
import BlogPost from '../blog-post/BlogPost';
import getBlog, { BlogData } from '../../api/blog';

// interface IPropsFromState {
//     blog?: IBlogData[];
// }

interface IState {
    blogPost?: string;
    cardClicked: boolean;
}

// interface IBlogData {
//   title: string;
//   author: string;
//   date: string;
//   menuphoto: 'image';
//   body: any;
//   type: 'array';
//   of: [{type: 'block'}];
//   path: string;
// }

class Blog extends React.Component<IPropsFromState, IState> {

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

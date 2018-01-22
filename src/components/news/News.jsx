import React from 'react';
import '../../compiled_css/components/news/News.css';
import { connect } from 'react-redux';
import { loadNews } from '../../actions/news'
import getNews from '../../api/news'

class News extends React.Component {
  constructor(props) {
    super(props)
    props.getNews(loadNews)
  }

  render () {
    const firstNews = this.props.news[0]
    const newsBody = firstNews ? firstNews.fields.body : ""
    return (
        <div className="News">
          { newsBody }
        </div>
        )
      }
}

const mapApiToState = (dispatch) => {
  return {
    getNews: (action) => getNews(dispatch, action)
  }
}

const ConnectedNews = connect(
  state => state,
  mapApiToState
)(News);

export default ConnectedNews;

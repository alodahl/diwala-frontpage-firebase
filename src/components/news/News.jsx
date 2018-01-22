import React from 'react';
import '../../compiled_css/components/news/News.css';
import { connect } from 'react-redux';
import { loadNews } from '../../actions/news'
import getNews from '../../api/news'

class News extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    props.getNews(loadNews)
  }

  render () {
    return (
        <div className="News">
          Heyyyyaaaa
        </div>
        )
      }
}

const mapApiToState = (dispatch) => {
  return {
    getNews: getNews.bind(dispatch)
  }
}

const ConnectedNews = connect(
  state => state,
  mapApiToState
)(News);

export default ConnectedNews;

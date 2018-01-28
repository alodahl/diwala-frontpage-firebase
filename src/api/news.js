import contentful from '../service/contentful';

export default function getNews(dispatch, action) {
  return contentful(dispatch, action)
}

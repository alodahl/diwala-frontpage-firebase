import { pullNews } from '../service/contentful';

export default function getNews(dispatch, action) {
  return pullNews(dispatch, action)
}

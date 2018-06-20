import pullNews from '../service/news';

export default function getNews(dispatch: any, action: any) {
  pullNews(dispatch, action);
}

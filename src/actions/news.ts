import { LOAD_NEWS } from '../reducers/news';

export const loadNews = (news: any) => {
  return {
    type: LOAD_NEWS,
    news
  };
};

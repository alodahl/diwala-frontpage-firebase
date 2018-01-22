import { LOAD_NEWS } from '../reducers/news';

export const loadNews = (news) => {
  return {
    type: LOAD_NEWS,
    news
  };
};

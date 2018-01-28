export const LOAD_NEWS = 'LOAD_NEWS';

const news =  (state = [], action) => {
  switch (action.type) {
    case LOAD_NEWS:
      if (!action.news) {
        return state;
      }
      return action.news;
    default:
      return state;
  }
};

export default news

export const InitialNewsState = [];

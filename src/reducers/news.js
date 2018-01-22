export const LOAD_NEWS = 'LOAD_NEWS';

const news =  (state = [], action) => {
  switch (action.type) {
    case LOAD_NEWS:
      console.log(state, action)
      return state
    default:
      return state;
  }
};

export default news
export const InitialNewsState = [];

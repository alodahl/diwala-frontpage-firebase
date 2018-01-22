import { combineReducers } from 'redux';
import news, { InitialNewsState } from './news';

export const diwalaFrontpageApp = combineReducers({
  news
});

export const DiwalaState = {
  news: InitialNewsState
};

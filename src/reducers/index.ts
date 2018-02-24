import { combineReducers } from 'redux';
import news, { InitialNewsState } from './news';
import team, { InitialTeamState } from './team';
import partners, { InitialPartnersState } from './partners';
import texts, { InitialTextState } from './text';

export const diwalaFrontpageApp = combineReducers({
  news,
  partners,
  team,
  texts
});

export const DiwalaState = {
  news: InitialNewsState,
  partners: InitialPartnersState,
  team: InitialTeamState,
  texts: InitialTextState
};

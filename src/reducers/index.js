import { combineReducers } from 'redux';
import news, { InitialNewsState } from './news';
import team, { InitialTeamState } from './team';
import partners, { InitialPartnersState } from './partners';

export const diwalaFrontpageApp = combineReducers({
  news, team, partners
});

export const DiwalaState = {
  news: InitialNewsState,
  team: InitialTeamState,
  partners: InitialPartnersState
};

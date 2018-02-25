import { combineReducers } from 'redux';
import news, { InitialNewsState } from './news';
import team, { InitialTeamState } from './team';
import partners, { InitialPartnersState } from './partners';
import texts, { InitialTextState } from './texts';
import form, { InitialFormState } from './mailform';

export const diwalaFrontpageApp = combineReducers({
  news,
  partners,
  team,
  texts,
  form
});

export const DiwalaState = {
  news: InitialNewsState,
  partners: InitialPartnersState,
  team: InitialTeamState,
  texts: InitialTextState,
  form: InitialFormState
};

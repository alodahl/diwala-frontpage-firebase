import { LOAD_TEAM } from '../reducers/team';

export const loadTeam = (team) => {
  return {
    type: LOAD_TEAM,
    team
  };
};

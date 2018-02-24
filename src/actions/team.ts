import { LOAD_TEAM } from '../reducers/team';

export const loadTeam = (team: any) => {
  return {
    type: LOAD_TEAM,
    team
  };
};

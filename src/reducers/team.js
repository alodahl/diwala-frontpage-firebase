export const LOAD_TEAM = 'LOAD_TEAM';

const news =  (state = [], action) => {
  switch (action.type) {
    case LOAD_TEAM:
      if (!action.team) {
        return state;
      }
      return action.team;
    default:
      return state;
  }
};

export default news

export const InitialTeamState = [];

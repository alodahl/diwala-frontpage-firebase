export const LOAD_TEAM = 'LOAD_TEAM';

const team = (state = [], action: any) => {
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

export default team;

export const InitialTeamState = [];

import pullTeam from '../service/team';

export default function getTeam(dispatch: any, action: any) {
  return pullTeam(dispatch, action);
}

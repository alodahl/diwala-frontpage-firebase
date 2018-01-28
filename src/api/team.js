import { pullTeam } from '../service/contentful';

export default function getTeam(dispatch, action) {
  return pullTeam(dispatch, action)
}

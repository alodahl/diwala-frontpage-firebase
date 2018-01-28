import { pullPartners } from '../service/contentful';

export default function getPartners(dispatch, action) {
  return pullPartners(dispatch, action)
}

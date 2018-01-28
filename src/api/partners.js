import pullPartners from '../service/partner';

export default function getPartners(dispatch, action) {
  return pullPartners(dispatch, action)
}

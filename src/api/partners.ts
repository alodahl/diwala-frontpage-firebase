import pullPartners from '../service/partner';

export default function getPartners(dispatch: any, action: any) {
  return pullPartners(dispatch, action);
}

import pullPartners from '../service/partner';
import { SanityData, SanityImageData, SanitySlugData } from './sanity';

export default function getPartners(dispatch: any, action: any) {
  return pullPartners(dispatch, action);
}

export interface PartnerData extends SanityData {
  name: string;
  slug: SanitySlugData;
  order: number;
  image: SanityImageData;
}
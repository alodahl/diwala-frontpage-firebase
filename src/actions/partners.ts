import { LOAD_PARTNERS } from '../reducers/partners';

export const loadPartners = (partners: any) => {
  return {
    type: LOAD_PARTNERS,
    partners
  };
};

import { LOAD_PARTNERS } from '../reducers/partners';

export const loadPartners = (partners) => {
  return {
    type: LOAD_PARTNERS,
    partners
  };
};

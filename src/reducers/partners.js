export const LOAD_PARTNERS = 'LOAD_PARTNERS';

const news =  (state = [], action) => {
  switch (action.type) {
    case LOAD_PARTNERS:
      if (!action.partners) {
        return state;
      }
      return action.partners;
    default:
      return state;
  }
};

export default news

export const InitialPartnersState = [];

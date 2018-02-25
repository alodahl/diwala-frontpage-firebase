import { SEND_PERSON } from '../reducers/mailform';

export const sendPerson = (profile: any) => {
  return {
    type: SEND_PERSON,
    profile
  };
};

export const updateFormStatus = (actionType: any) => {
  return {
    type: actionType
  };
};

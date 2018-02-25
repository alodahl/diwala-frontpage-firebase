export const SEND_PERSON = 'SEND_PERSON';
export const EXISTING_MEMBER = 'EXISTING_MEMBER';
export const SIGNED_UP = 'SIGNED_UP';
export const UNKNOWN_ERROR = 'UNKNOWN_ERROR';

const profile = (state = {}, action: any) => {
  switch (action.type) {
    case EXISTING_MEMBER:
      return {
        sent: true,
        action: EXISTING_MEMBER
      };
    case SIGNED_UP:
      return {
        sent: true,
        action: SIGNED_UP
      };
    case UNKNOWN_ERROR:
      return {
        sent: true,
        action: UNKNOWN_ERROR
      };
    default:
      return {};
  }
};

export default profile;

export const InitialFormState = {
  sent: false
};

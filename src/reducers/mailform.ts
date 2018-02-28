export const SEND_PERSON = 'SEND_PERSON';
export const EXISTING_MEMBER = 'EXISTING_MEMBER';
export const SIGNED_UP = 'SIGNED_UP';
export const UNKNOWN_ERROR = 'UNKNOWN_ERROR';
export const LOADING = 'LOADING';

export const InitialFormState = {
  loading: false
};

const profile = (state = InitialFormState, action: any) => {
  switch (action.type) {
    case EXISTING_MEMBER:
      return {
        action: EXISTING_MEMBER
      };
    case SIGNED_UP:
      return {
        action: SIGNED_UP
      };
    case UNKNOWN_ERROR:
      return {
        action: UNKNOWN_ERROR
      };
    case LOADING:
      return {
        loading: true
      };
    default:
      return {};
  }
};

export default profile;

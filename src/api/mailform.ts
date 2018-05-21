import { post, postSubscrption } from '../service/mailform';
import { updateFormStatus } from '../actions/mailform';
import { EXISTING_MEMBER, SIGNED_UP, UNKNOWN_ERROR, LOADING } from '../reducers/mailform';

export async function postPerson(dispatch: any, action: any, data: any) {
  dispatch(updateFormStatus(LOADING));
  const response = await post(dispatch, action, data);
  if (response.ok) {
    dispatch(updateFormStatus(SIGNED_UP));
  } else if (!response.ok && response.message === EXISTING_MEMBER) {
    dispatch(updateFormStatus(EXISTING_MEMBER));
  } else {
    dispatch(updateFormStatus(UNKNOWN_ERROR));
  }
}

export async function postSubscriptionInterest(dispatch: any, action: any, data: any) {
  dispatch(updateFormStatus(LOADING));
  const response = await postSubscrption(dispatch, action, data);
  if (response.ok) {
    dispatch(updateFormStatus(SIGNED_UP));
  } else if (!response.ok && response.message === EXISTING_MEMBER) {
    dispatch(updateFormStatus(EXISTING_MEMBER));
  } else {
    dispatch(updateFormStatus(UNKNOWN_ERROR));
  }
}

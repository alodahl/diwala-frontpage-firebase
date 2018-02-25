import { post } from '../service/mailform';
import { updateFormStatus } from '../actions/mailform';
import { EXISTING_MEMBER, SIGNED_UP, UNKNOWN_ERROR } from '../reducers/mailform';

export default async function postPerson(dispatch: any, action: any, data: any) {
  const response = await post(dispatch, action, data);
  if (response.ok) {
    dispatch(updateFormStatus(SIGNED_UP));
  } else if (!response.ok && response.message === EXISTING_MEMBER) {
    dispatch(updateFormStatus(EXISTING_MEMBER));
  } else {
    dispatch(updateFormStatus(UNKNOWN_ERROR));
  }
}

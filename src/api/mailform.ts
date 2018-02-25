import { post } from '../service/mailform';

export default function postPerson(dispatch: any, action: any, data: any) {
  console.log(dispatch);
  console.log(action);
  console.log(data);
  return post(dispatch, action, data);
}

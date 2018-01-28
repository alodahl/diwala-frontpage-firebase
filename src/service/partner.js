import sanityRequest from './sanity';

export default async function (dispatch, action) {
  try {
    const result = await sanityRequest(`*[_type == 'partner']`);
    dispatch(action(result));
  } catch (error) {
    console.log('error', error);
  }
}

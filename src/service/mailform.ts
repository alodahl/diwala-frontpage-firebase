const rp = require('request-promise');

interface FormPerson {
  email: string;
  firstname: string;
  lastname: string;
  company?: string;
}
const getOptions = (url: string, data: FormPerson) => {
  const company = data.company || '';
  return {
      method: 'POST',
      uri: url,
      headers: {
        'User-Agent': 'Request-Promise',
        'Content-Type': 'application/json;charset=utf-8'
      },
      json: true,
      body: {
        'email_address': data.email,
        'firstname': data.firstname,
        'lastname': data.lastname,
        'company': company
      }
    };
};

export const post = async (dispatch: any, action: any, data: FormPerson)  => {
  const url = 'https://us-central1-diwala-frontpage-dev.cloudfunctions.net/mailChimSignup';
  const options = getOptions(url, data);
  try {
      const response = await rp(options);
      return response;
  } catch (e) {
      return e;
  }
};

export const postSubscrption = async (dispatch: any, action: any, data: FormPerson) => {
  const url = 'https://us-central1-diwala-frontpage-dev.cloudfunctions.net/subscriptionSignup';
  const options = getOptions(url, data);
  try {
      const response = await rp(options);
      return response;
  } catch (e) {
      return e;
  }
};

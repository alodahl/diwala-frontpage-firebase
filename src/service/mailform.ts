const rp = require('request-promise');

interface FormPerson {
  email: string;
  firstname: string;
  lastname: string;
}

export const post = async (dispatch: any, action: any, data: FormPerson)  => {
  const url = 'http://localhost:5000/diwala-frontpage-dev/us-central1/mailChimSignup';
  const options = {
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
      'lastname': data.lastname
    }
  };

  try {
      const response = await rp(options);
      return response;
  } catch (e) {
      return e;
  }

};

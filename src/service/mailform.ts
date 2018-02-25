const rp = require('request-promise');

export const post = async (dispatch: any, action: any, data: any)  => {
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
      'email_address': 'lottwin@gmail.com',
      'firstname': 'aaanaastasia',
      'lastname': 'sopparova'
    }
  };

  try {
      const response = await rp(options);
      console.log(response);
  } catch (e) {
      console.log(e);
  }

};

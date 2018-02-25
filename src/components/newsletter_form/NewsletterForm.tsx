import * as React from 'react';
import { Form, Text } from 'react-form';
import { connect } from 'react-redux';
import sendPerson from '../../api/mailform';
import { loadTexts } from '../../actions/texts';
import '../../compiled_css/components/newsletter_form/NewsletterForm.css';

class FormBox extends React.Component {
  props: {
    sendPerson: (action: any, values: any) => void,
    injectClasses: string
  };

  submitForm (values: any, event: any) {
    this.props.sendPerson(loadTexts, values);
  }

  getForm () {
    const submit = this.submitForm.bind(this);
    return (
      <Form onSubmit={submit}>
        {formApi => (
            <form onSubmit={e => {e.preventDefault(); return formApi.submitForm(e); }} id="form1" className="newsletter_form closed">
              <Text placeholder="Email" field="email" id="email"/>
              <Text placeholder="Firstname" field="firstname" id="first"/>
              <Text placeholder="Lastname" field="lastname" id="last"/>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          )}
      </Form>
    );
  }

  render() {
    return this.getForm();
  }
}

const mapApiToState = (dispatch: any) => {
  return {
    sendPerson: (action: any, values: any) => sendPerson.bind(dispatch, action, values)()
  };
};

const ConnectedFormBox = connect(
  state => state,
  mapApiToState
)(FormBox);

export default ConnectedFormBox;

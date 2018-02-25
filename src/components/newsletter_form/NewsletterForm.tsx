import * as React from 'react';
import { Form, Text } from 'react-form';
import { connect } from 'react-redux';
import postPerson from '../../api/mailform';
import { sendPerson, updateFormStatus } from '../../actions/mailform';
import '../../compiled_css/components/newsletter_form/NewsletterForm.css';
import ResponseNewsletterForm from './DesignedResponse';

class FormBox extends React.Component {
  props: {
    sendPerson: (action: any, values: any) => void,
    injectedClasses: string,
    form: {
      action: string
    }
    restartForm: (action: any) => void,
  };

  submitForm = (values: any, event: any) => {
    this.props.sendPerson(sendPerson, values);
  }

  restartForm = () => {
    this.props.restartForm(updateFormStatus(''));
  }

  getForm () {
    const classes = 'newsletter_form ' + this.props.injectedClasses;
    return (
      <Form onSubmit={this.submitForm}>
        {(formApi: any) => (
            <form
              onSubmit={e => {e.preventDefault(); return formApi.submitForm(e); }}
              id="form1"
              className={classes}
            >
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
    if (!this.props.form.action) {
      return this.getForm();
    } else {
      return <ResponseNewsletterForm form={this.props.form} onRestart={this.restartForm}/>;
    }
  }
}

const mapApiToState = (dispatch: any) => {
  return {
    sendPerson: (action: any, values: any) => postPerson.bind({}, dispatch, action, values)(),
    restartForm: (action: any) => dispatch(action)
  };
};

const ConnectedFormBox = connect<StateFromProps, DispatchFromProps, {injectedClasses: string}>(
  state => state,
  mapApiToState
)(FormBox);

export default ConnectedFormBox;

interface StateFromProps {
}

interface DispatchFromProps {
  sendPerson: (action: any, values: any) => void;
}

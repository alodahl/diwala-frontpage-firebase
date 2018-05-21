import * as React from 'react';
import { Form, Text } from 'react-form';
import { connect } from 'react-redux';
import { postSubscriptionInterest } from '../../../api/mailform';
import { sendPerson, updateFormStatus } from '../../../actions/mailform';
import ResponseNewsletterForm from './DesignedResponse';
import Loader from '../../loader/Loader';

class FormBox extends React.Component {
  props: {
    postSubscriptionInterest: (action: any, values: any) => void,
    injectedClasses: string,
    form: {
      action: string,
      loading: boolean
    }
    restartForm: (action: any) => void,
  };

  submitForm = (values: any, event: any) => {
    this.props.postSubscriptionInterest(sendPerson, values);
  }

  restartForm = () => {
    this.props.restartForm(updateFormStatus(''));
  }

  buttonOrLoading = () => {
    if (!this.props.form.loading) {
      return (
        <button type="submit" className="button btn btn-primary">
          Submit
        </button>
      );
    } else {
      return (
        <button type="submit" className="button btn btn-primary">
          <Loader />
        </button>
      );
    }
  }

  getForm () {
    const classes = 'subscription_form ' + this.props.injectedClasses;
    return (
      <Form onSubmit={this.submitForm}>
        {(formApi: any) => (
            <form
              onSubmit={e => {e.preventDefault(); return formApi.submitForm(e); }}
              id="form1"
              className={classes}
            >
              <Text placeholder="Company" field="company" id="last" autoComplete="company"/>
              <Text placeholder="Email" field="email" id="email" autoComplete="email"/>
              <Text placeholder="Firstname" field="firstname" id="first" autoComplete="given-name"/>
              <Text placeholder="Lastname" field="lastname" id="last" autoComplete="family-name"/>
              <div className="flex-btn-group">
                {this.buttonOrLoading()}
              </div>
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
    postSubscriptionInterest: (action: any, values: any) => postSubscriptionInterest.bind({}, dispatch, action, values)(),
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
  postSubscriptionInterest: (action: any, values: any) => void;
}

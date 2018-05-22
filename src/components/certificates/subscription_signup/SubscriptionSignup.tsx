import * as React from 'react';
import SubscriptionFormButton from '../subscription_form_button/SubscriptionFormButton';
import SubscriptionForm from '../subscription_form/SubscriptionForm';
import { TextData } from '../../../api/texts';
import { findRightText } from '../../../utils/textUtil';

const Label = (props: { text: string, injectedClasses: string }) => {
  return (
    <div className={`button-label ${props.injectedClasses}`}>
      {props.text}
    </div>
  );
};

class SignupComponent extends React.Component {
  props: {
    text: TextData;
  };
  state: {
    formDisplay: boolean;
    formClean: boolean;
  };

  constructor(props: any) {
    super(props);
    this.state = {
      formDisplay: false,
      formClean: true
    };
  }

  toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay,
      formClean: !this.state.formClean
    });
  }

  render() {
    const toggleForm = this.toggleForm.bind(this);
    const formClasses = this.state.formDisplay ? 'open' : 'closed';
    const sanityButtonTextId = 'button';
    const sanityButtonLabelId = 'button-label';
    const buttonText = this.state.formDisplay ? 'Cancel' : findRightText(this.props.text, sanityButtonTextId);
    const labelText = findRightText(this.props.text, sanityButtonLabelId);

    return (
      <div className="subscriptionSignupForm">
        <SubscriptionForm injectedClasses={formClasses}/>
        <Label text={labelText} injectedClasses={formClasses}/>
        <SubscriptionFormButton onClick={toggleForm} buttonText={buttonText} injectedClasses={formClasses}/>
      </div>
    );
  }
}

export default SignupComponent;

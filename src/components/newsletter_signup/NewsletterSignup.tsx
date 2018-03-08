import * as React from 'react';
import NewsletterButton from '../buttons/newsletter/NewsletterButton';
import NewsletterForm from '../newsletter_form/NewsletterForm';

class SignupComponent extends React.Component {
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
    const buttonText = this.state.formDisplay ? 'Cancel' : 'Sign up for our newsletter!';

    return (
      <div className="signupForm">
        <NewsletterForm injectedClasses={formClasses}/>
        <NewsletterButton onClick={toggleForm} buttonText={buttonText} />
      </div>
    );
  }
}

export default SignupComponent;

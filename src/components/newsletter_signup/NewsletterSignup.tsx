import * as React from 'react';
import NewsletterButton from '../buttons/newsletter/NewsletterButton';
import NewsletterForm from '../newsletter_form/NewsletterForm';

class SignupComponent extends React.Component {
  props: {
    injectClasses: string;
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

  showForm() {
    this.setState({
      formDisplay: !this.state.formDisplay,
      formClean: !this.state.formClean
    });
  }

  render() {
    const showForm = this.showForm.bind(this);
    const formClasses = this.state.formDisplay ? 'open' : 'closed';
    const buttonClasses = this.state.formDisplay ? 'gone' : 'displayed';
    return (
      <div className="signupForm">
        <NewsletterForm injectedClasses={formClasses}/>
        <NewsletterButton onClick={showForm} injectedClasses={buttonClasses} />
      </div>
    );
  }
}

export default SignupComponent;

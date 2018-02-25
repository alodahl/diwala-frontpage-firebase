import * as React from 'react';
import NewsletterButton from '../buttons/newsletter/NewsletterButton';
import NewsletterForm from '../newsletter_form/NewsletterForm';

class SignupComponent extends React.Component {
  state: {
    formDisplay: boolean
  };

  constructor(props: any) {
    super(props);
    this.state = {
      formDisplay: false
    };
  }

  showForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  render() {
    const showForm = this.showForm.bind(this);
    // const formClasses = this.state.formDisplay ? 'open' : 'closed';
    // <NewsletterForm injectClasses={formClasses}/>
    return (
      <div>

        <NewsletterForm/>
        <NewsletterButton onClick={showForm} />
      </div>
    );
  }
}

export default SignupComponent;

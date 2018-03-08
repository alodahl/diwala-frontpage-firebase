import * as React from 'react';
import { EXISTING_MEMBER, SIGNED_UP } from '../../reducers/mailform';

export default function ResponseNewsletterForm(props: any) {
  const values = props.form;

  let message = 'We don\'t know what happened';
  let emoji = '😩';

  if (values.action === EXISTING_MEMBER) {
    message = 'You are already registered';
    emoji = '😎';
  }
  if (values.action === SIGNED_UP) {
    message = 'Thank you for registration';
    emoji = '😁';
  }

  return (
    <div className="response-form">
      <div className="emoji">{emoji}</div>
      <div className="message">{message}</div>
      <button className="button restart-button" onClick={props.onRestart}>Add another email</button>
    </div>
  );
}

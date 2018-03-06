import * as React from 'react';
import { EXISTING_MEMBER, SIGNED_UP } from '../../reducers/mailform';

export default function ResponseNewsletterForm(props: any) {
  const values = props.form;

  let message = 'Vi vet ikke helt hva som skjedde';
  let emoji = '😩';

  if (values.action === EXISTING_MEMBER) {
    message = 'Du er allerede påmeldt';
    emoji = '😎';
  }
  if (values.action === SIGNED_UP) {
    message = 'Takk for påmeldingen';
    emoji = '😁';
  }

  return (
    <div className="response-form">
      <div className="emoji">{emoji}</div>
      <div className="message">{message}</div>
      <button className="restart-button" onClick={props.onRestart}>Meld på en annen</button>
    </div>
  );
}

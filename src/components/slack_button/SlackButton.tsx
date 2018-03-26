import * as React from 'react';
import LinkButton from '../buttons/link/LinkButton';

class SlackButton extends React.Component {
  public render() {
    const joinSlack = 'https://join.slack.com/t/';
    const slackUrl = joinSlack + 'diwala-org/shared_invite/enQtMzM2OTQ0NDc2OTgyLTYwYjg4YjcwZjc3MmU2MWY0MjMzMzA4MWQ2NTEyN2ExMmFmZGYyNGEyMGFkMDVjNDkyMjM1YmZkMTViY2RlYTY';
    return (
      <LinkButton
        classes="button button--join-slack"
        url={slackUrl}
        text="Join our community on slack!"
      />
    );
  }
}

export default SlackButton;

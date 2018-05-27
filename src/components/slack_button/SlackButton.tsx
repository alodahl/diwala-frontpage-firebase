import * as React from 'react';
import LinkButton from '../buttons/link/LinkButton';

class SlackButton extends React.Component {
  public render() {
    const joinSlack = 'https://join.slack.com/t/';
    const slackUrl = joinSlack + 'diwala-org/shared_invite/enQtMzM2MDY1NjAzMTU2LTk1NTI0OThkNWZkOTQ2MjI5ZGEwMTgyOWVhZDA5ZDM0NzA1ZDA1MjI2YTJhZWU2YTM0NGUxNTI5ZGMyNDVlMmQ';
    return (
      <LinkButton
        classes="button button--join"
        url={slackUrl}
        text="Join our community on slack!"
      />
    );
  }
}

export default SlackButton;

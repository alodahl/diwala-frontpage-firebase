import * as React from 'react';
import LinkButton from '../buttons/link/LinkButton';

class SlackButton extends React.Component {
  public render() {
    const joinSlack = 'https://join.slack.com/t/';
    const slackUrl = joinSlack + 'diwala-org/shared_invite/enQtMjIyODA4OTQ0MjEzLTZkMmU5MmNkNDg1YWEzNmM5Y2Q3NGYwYmMxMzkzMDJlMzBmZDdhOWUxNzNkZWJjNGEyZDhhYWY4NjA1ZDY2MTk';
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

import * as React from 'react';
import '../../compiled_css/components/slack_button/SlackButton.css';

const slackUrl = 'https://join.slack.com/t/diwala-org/shared_invite/enQtMjIyODA4OTQ0MjEzLTZkMmU5MmNkNDg1YWEzNmM5Y2Q3NGYwYmMxMzkzMDJlMzBmZDdhOWUxNzNkZWJjNGEyZDhhYWY4NjA1ZDY2MTk';

export default function SlackButton(props: any) {
  return (
    <a className="slack-button" href={slackUrl}>Join our community on slack! </a>
  );
}

import * as React from 'react';
import '../../compiled_css/components/main_box/MainBox.css';
import '../../compiled_css/components/core/Core.css';
import ButtonLink from '../buttons/ButtonLink';
import Hero from '../hero/Hero';

export default function MainText() {
  return (
    <div className="MainBox">
      <Hero />
      <div className="MainText">
        <p>We are currently working on our new webpage, which will be <span className="Diwala-bold">released early 2018</span></p>
        <p><span className="Diwala-bold">More curious or got any questions?</span></p>
        <div className="Button-holder">
          <ButtonLink href="mailto:hello@diwala.org" text="Send us a mail" color="purple"/>
          <span className="Diwala-bold">or</span>
          <ButtonLink
            href="https://join.slack.com/t/diwala-org/shared_invite/MjIyODA4OTQ0MjEzLTE1MDE5NDQxMTAtMjA4NmRkZmI2ZA"
            text="Join us on Slack"
            color="yellow"
            newTab={true}
          />
        </div>
        <p>Looking forward to hear from you</p>
        <p><span className="Diwala-bold">The Diwala Team</span></p>
      </div>
    </div>
  );
}

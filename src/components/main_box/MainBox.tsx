import * as React from 'react';
import '../../compiled_css/components/main_box/MainBox.css';
import '../../compiled_css/components/core/Core.css';
import Hero from '../hero/Hero';
import SlackButton from '../slack_button/SlackButton';
import ConnectedBenefits from '../benefits/Benefits';

export default function MainText() {
  return (
    <div className="MainBox">
      <section className="MainBox__section">
        <Hero />
        <SlackButton />
      </section>
      <section className="MainBox__section">
        <ConnectedBenefits />
      </section>
    </div>
  );
}

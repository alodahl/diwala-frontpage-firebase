import * as React from 'react';
import '../../compiled_css/components/mission/Mission.css';

export default function Header(props: any) {
  return (
    <div className="website-hero">
      <div className="website-hero__logo">
        <div className="website-hero__text">
          We are building a decentralised platform that verifies the skills of people in displacement.
        </div>
      </div>
    </div>
  );
}

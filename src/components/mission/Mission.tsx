import * as React from 'react';
import { TextData } from '../../api/texts';

export default function Mission(props: { text: TextData }) {
  return (
    <div className="website-hero">
      <div className="website-hero__logo">
        <div className="website-hero__text">
          {props.text.value[0].value}
        </div>
      </div>
    </div>
  );
}

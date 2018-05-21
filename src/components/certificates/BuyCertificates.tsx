import * as React from 'react';
const diwalaIcon = require('../../graphics/Diwala_Logo-08.png');

export default function BuyCertificates(props: any) {

  return (
      <div className="BuyCertificates" id="curious">
        <img src={diwalaIcon} className="BuyCertificates__diwala-icon"/>
        <h2 className="BuyCertificates__title">Choose your certificate bundle</h2>
        <div className="BuyCertificates__buttons flex-btn-group">
          <div className="BuyCertificates__token-group">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
      </div>
  );
}

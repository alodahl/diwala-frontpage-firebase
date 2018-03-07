import * as React from 'react';
import { urlFor } from '../../core/utilities/image-builder.functions';
import { getViewportWidth } from '../../core/utilities/viewport.functions';

export default function Partners(props: any) {
  const imageWidth = Math.round(getViewportWidth() / 4);
  
  const AllPartners = () => {
    if (props.partners.length > 0) {
      const partnersSortedByOrder: any = [...props.partners].sort((a: any, b: any) => a.order - b.order);
      
      return partnersSortedByOrder.map((partner: any) => {
        const url = urlFor(partner.image).width(imageWidth).url();
        return (
          <div key={partner._id} className="col-sm-3 col-6 partner">
            <img className="partners__logo" src={url} />
          </div>
        );
      });
    } else {
      return <span />;
    }
  };

  return (
    <div className="container">
      <div className="row partners__section">
        <div className="col-lg-12">
          <div className="row">
            <div className="partners__title">Partners <span className="partners__title-wrap">& Supporters</span></div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-10 col-md-12">
          <div className="row partners__list">
            {AllPartners()}
          </div>
        </div>
      </div>
    </div>
  );
}

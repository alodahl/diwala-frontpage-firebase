import * as React from 'react';
import '../../compiled_css/components/partners/Partners.css';
import { urlFor } from '../../core/utilities/image-builder.functions';
import { getViewportWidth } from '../../core/utilities/viewport.functions';

export default function Partners(props: any) {
  const imageWidth = getViewportWidth() / 4;
  const AllPartners = () => {
    if (props.partners.length > 0) {
      return props.partners.map((partner: any) => {
        const url = urlFor(partner.image).width(imageWidth).url();
        return (
          <div key={partner._id} className="partner">
            <img src={url} />
          </div>
        );
      });
    } else {
      return <span />;
    }

  };

  return (
    <div className="partners-section">
      <div className="partner-title">Partners & Supporters</div>
      <AllPartners />
    </div>

  );
}

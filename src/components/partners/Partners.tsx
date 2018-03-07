import * as React from 'react';
import { urlFor } from '../../core/utilities/image-builder.functions';
import { PartnerData } from '../../api/partners';

export default function Partners(props: {partners: PartnerData[]}) {
  const imageWidth = 200;

  const AllPartners = () => {
    const partnersSortedByOrder = props.partners.sort((a, b) => a.order - b.order);

    return partnersSortedByOrder.map((partner: any) => {
      const url = urlFor(partner.image).width(imageWidth).url();
      return (
        <li key={partner._id} className="partners__list-item">
          <img className="partners__logo" src={url}/>
        </li>
      );
    });
  };

  return (
    <div className="partners">
      <h2 className="partners__title title--h1">
        Partners <span className="partners__title-wrap">&amp; Supporters</span>
      </h2>
      <ul className="partners__list">
        {AllPartners()}
      </ul>
    </div>
  );
}

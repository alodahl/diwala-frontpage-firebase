import * as React from 'react';
import '../../compiled_css/components/benefits/Benefits.css';
import { TextData } from '../../api/texts';
import MockupGroup from '../mockup_group/MockupGroup';

class Benefits extends React.Component {
  public props: { text: TextData };

  render() {
    return (
      <div className="container">
        <div className="benefits row">
          <dl className="benefits__list col-lg-7 col-md-12 order-lg-2">
            <h2 className="benefits__title title">Benefits</h2>
            {this.props.text.value.map((item, key) => [
              <dt key={key + 'dt'} className="benefits__list-item-label">{item.label}</dt>,
              <dd key={key + 'dd'} className="benefits__list-item-value">{item.value}</dd>
            ])}
          </dl>
          <MockupGroup />
        </div>
      </div>
    );
  }
}

export default Benefits;

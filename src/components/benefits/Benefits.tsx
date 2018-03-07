import * as React from 'react';
import { TextData } from '../../api/texts';

// import MockupGroup from '../mockup_group/MockupGroup';

class Benefits extends React.Component {
  public props: {
    text: TextData
  };

  render() {
    return (
      <div className="benefits">
        <h2 className="benefits__title title">Benefits</h2>
        <dl className="benefits__list">
          {this.props.text.value.map((item, key) => (
            <>
              <dt key={key + 'dt'} className="benefits__list-item-label">{item.label}</dt>
              <dd key={key + 'dd'} className="benefits__list-item-value">{item.value}</dd>
            </>
          ))}
        </dl>
        {/*<MockupGroup/>*/}
      </div>
    );
  }
}

export default Benefits;

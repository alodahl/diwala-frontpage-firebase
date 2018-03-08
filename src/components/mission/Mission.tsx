import * as React from 'react';
import { TextData } from '../../api/texts';

class Mission extends React.Component {
  public props: {
    text: TextData;
  };

  render() {
    return (
      <div className="mission">
        <h2 className="mission__title">{this.props.text.value[ 0 ].label}</h2>
        <div className="mission__text">{this.props.text.value[ 0 ].value}</div>
      </div>
    );
  }
}

export default Mission;
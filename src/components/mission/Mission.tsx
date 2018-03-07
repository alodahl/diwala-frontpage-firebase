import * as React from 'react';
import { TextData } from '../../api/texts';

class Mission extends React.Component {
  public props: {
    text: TextData;
  };

  render() {
    return (
      <>
        <h2 className="title">{this.props.text.value[ 0 ].label}</h2>
        <div>{this.props.text.value[ 0 ].value}</div>
      </>
    );
  }
}

export default Mission;
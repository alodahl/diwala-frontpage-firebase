import * as React from 'react';

class Filter extends React.Component {
  public props: {
    children: any;
    if: any;
  };

  public render() {
    if (!this.props.if) {
      return null;
    }
    return {...this.props.children};
  }
}

export default Filter;
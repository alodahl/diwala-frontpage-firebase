import * as React from 'react';
// import { getViewportHeight, getViewportWidth } from '../../core/utilities/viewport.functions';

class Picture extends React.Component {
  public props: {
    // height: number;
    src: string;
    classes: any;
    // width: number;
  };

  componentDidMount() {
    window.addEventListener('resize', () => this.setState({
      ...this.state // just to make it update
    }));
  }

  render() {
    // const maxHeight = this.props.maxHeight ? this.props.maxHeight : Number.MAX_SAFE_INTEGER;
    // const height = Math.min(getViewportHeight(), maxHeight, this.props.height);
    // const maxWidth = this.props.maxWidth ? this.props.maxWidth : Number.MAX_SAFE_INTEGER;
    // const width = Math.min(getViewportWidth(), maxWidth, this.props.width);
    // const src = this.props.src.replace('https://', '');
    // const rszSrc = `https://rsz.io/${src}?mode=crop&width=${width}&height=${height}`;
    return (
      <div className={`picture ${this.props.classes}`}>
        <img src={this.props.src}/>
      </div>
    );
  }
}

export default Picture;

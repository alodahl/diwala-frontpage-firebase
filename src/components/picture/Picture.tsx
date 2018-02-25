import * as React from 'react';
import '../../compiled_css/components/picture/Picture.css';

class Picture extends React.Component {
  public props: {
    height: number;
    maxHeight?: number;
    maxWidth?: number;
    src: string;
    width: number;
  };

  render() {
    const maxHeight = this.props.maxHeight ? this.props.maxHeight : Number.MAX_SAFE_INTEGER;
    const height = Math.min(getViewportHeight(), maxHeight, this.props.height);
    const maxWidth = this.props.maxWidth ? this.props.maxWidth : Number.MAX_SAFE_INTEGER;
    const width = Math.min(getViewportWidth(), maxWidth, this.props.width);
    const src = this.props.src.replace('https://', '');
    const rszSrc = `https://rsz.io/${src}?mode=crop&width=${width}&height=${height}`;
    return (
      <div className="picture">
        <img src={rszSrc}/>
      </div>
    );
  }
}

export default Picture;

function getViewportHeight(): number {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

function getViewportWidth(): number {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}
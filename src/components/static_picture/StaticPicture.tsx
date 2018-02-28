import * as React from 'react';
import '../../compiled_css/components/static_picture/StaticPicture.css';
import { getViewportHeight, getViewportWidth } from '../../core/utilities/viewport.functions';

class StaticPicture extends React.Component {
  public props: {
    height: number;
    maxHeight?: number;
    maxWidth?: number;
    src: string;
    width: number;
    modifiedHeight?: number;
  };

  componentDidMount() {
    window.addEventListener('resize', () => this.setState({
      ...this.state // just to make it update
    }));
  }

  render() {
    const maxHeight = this.props.maxHeight ? this.props.maxHeight : Number.MAX_SAFE_INTEGER;
    const modifiedHeight = this.props.modifiedHeight || 0;
    const height = Math.min(getViewportHeight(), maxHeight, this.props.height) - modifiedHeight;
    const maxWidth = this.props.maxWidth ? this.props.maxWidth : Number.MAX_SAFE_INTEGER;
    const width = Math.min(getViewportWidth(), maxWidth, this.props.width);
    const src = this.props.src.replace('https://', '');
    const rszSrc = `https://rsz.io/${src}?mode=crop&width=${width}&height=${height}`;
    const styles = {
      backgroundImage: `url('${rszSrc}')`,
      height,
      width
    };
    return (
      <div className="static-picture" style={styles}>&nbsp;</div>
    );
  }
}

export default StaticPicture;

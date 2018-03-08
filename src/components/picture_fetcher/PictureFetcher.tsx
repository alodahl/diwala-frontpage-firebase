import { PictureData } from '../../api/pictures';
import * as React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from '../../service/sanity';
import { getViewportData, ViewportData } from '../../core/utilities/viewport.functions';
import { ReactElement } from 'react';

const builder = imageUrlBuilder(sanityClient);

class PictureFetcher extends React.Component<any> {
  public props: {
    children: ReactElement<any>;
    cropHeight: (viewport: ViewportData) => number;
    cropIf: (viewport: ViewportData) => boolean;
    cropWidth: (viewport: ViewportData) => number;
    focalX?: number;
    focalY?: number;
    pictures: PictureData[];
    name: string;
  };

  componentDidMount() {
    window.addEventListener('resize', () => this.setState({
      ...this.state // just to make it update
    }));
  }

  public render() {
    const picture = this.props.pictures.find(pic => pic.name === this.props.name);
    if (!picture) {
      return null;
    }
    let src: string;
    let viewportData = getViewportData();
    const height = this.props.cropHeight(viewportData);
    const width = this.props.cropWidth(viewportData);
    const focalX = this.props.focalX || 0.5;
    const focalY = this.props.focalY || 0.5;
    if (this.props.cropIf(viewportData)) {
      src = builder
        .image(picture.image)
        .size(width, height)
        .fit('crop')
        .crop('focalpoint')
        .focalPoint(focalX, focalY)
        .url();
    } else {
      src = builder.image(picture.image).url();
    }
    return React.Children.map(this.props.children, (child: ReactElement<any>) => React.cloneElement(child, {height, src, width}));
  }
}

export default PictureFetcher;
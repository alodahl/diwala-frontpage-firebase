import * as React from 'react';
import { TextData } from '../../api/texts';
import PictureFetcher from '../picture_fetcher/PictureFetcher';
import Picture from '../picture/Picture';

class Mission extends React.Component {
  public props: {
    text: TextData,
    pictures: any;
  };

  render() {
    console.log(this.props.pictures);
    return (
      <div className="impactPicture">
        <h2 className="impactPicture__title">{this.props.text.value[ 0 ].label}</h2>
        <div className="impactPicture__text">{this.props.text.value[ 0 ].value}</div>
        <PictureFetcher
          cropHeight={viewport => viewport.height}
          cropIf={viewport => viewport.width < 400}
          cropWidth={viewport => viewport.width}
          focalX={0.6}
          pictures={this.props.pictures}
          name="Tanzania market in token">
          <Picture src={''} classes="token-image__left"/>
        </PictureFetcher>
      </div>
    );
  }
}

export default Mission;

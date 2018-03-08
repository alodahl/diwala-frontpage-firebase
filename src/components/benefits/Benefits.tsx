import * as React from 'react';
import { TextData } from '../../api/texts';
import PictureFetcher from '../picture_fetcher/PictureFetcher';
import Picture from '../picture/Picture';
import { PictureData } from '../../api/pictures';

// import MockupGroup from '../mockup_group/MockupGroup';

class Benefits extends React.Component {
  public props: {
    pictures: PictureData[],
    text: TextData
  };

  render() {
    return (
      <div className="benefits">
        <h2 className="benefits__title title">Benefits</h2>
        <div className="benefits__text">
          <dl className="benefits__list">
            {this.props.text.value.map((item, key) => [
              <dt key={key + 'dt'} className="benefits__list-item-label">{item.label}</dt>,
              <dd key={key + 'dd'} className="benefits__list-item-value">{item.value}</dd>
            ])}
          </dl>
        </div>
        <div className="benefits__mockup">
          <PictureFetcher
            cropHeight={() => 520}
            cropIf={() => false}
            cropWidth={() => 652}
            pictures={this.props.pictures}
            name="Diwala_UI_DesktopVersion">
            <Picture src={''}/>
          </PictureFetcher>
        </div>
      </div>
    );
  }
}

export default Benefits;

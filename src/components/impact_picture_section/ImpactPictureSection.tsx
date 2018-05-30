import * as React from 'react';
import { TextData } from '../../api/texts';
import PictureFetcher from '../picture_fetcher/PictureFetcher';
import Picture from '../picture/Picture';

class ImpactPicture extends React.Component {
  public props: {
    text: TextData,
    pictures: any,
    picturePosition?: string,
    pictureName: string,
    pictureHeight?: number,
    pictureWidth?: number,
    scalePicture?: boolean,
    textVerticalAlignement?: string,
    extraModules?: any
  };

  findRightText(texts: any, id: string) {
    const textObj = texts.value.find((text: any) => {
      return text.label === id;
    });
    return textObj.value;
  }

  render() {
    const pictureName = this.props.pictureName;
    const title = this.findRightText(this.props.text, 'title');
    const text1 = this.findRightText(this.props.text, 'subtext-first');
    const text2 = this.findRightText(this.props.text, 'subtext-second');
    const horisontalPosition = this.props.picturePosition ? `__${this.props.picturePosition}` : '__left';
    const verticalPosition = this.props.textVerticalAlignement ? `__${this.props.textVerticalAlignement}` : '__center';
    return (
      <div className="impactPicture">
        <div className={`column-flex column-flex${horisontalPosition} column-flex${verticalPosition}`}>
          <h2 className={`impactPicture__title impactPicture__title${horisontalPosition}`}>{title}</h2>
          <div className={`impactPicture__text impactPicture__text${horisontalPosition}`}>{text1}</div>
          <div className={`impactPicture__text impactPicture__text${horisontalPosition}`}>{text2}</div>
          {...this.props.extraModules}
        </div>
        <PictureFetcher
          cropHeight={viewport => this.props.pictureHeight || viewport.height}
          cropIf={viewport => this.props.scalePicture || viewport.width < 2000}
          cropWidth={viewport => this.props.pictureWidth || viewport.width}
          focalX={0.6}
          pictures={this.props.pictures}
          name={pictureName}>
          <Picture src={''} classes={`token-image token-image${horisontalPosition}`}/>
        </PictureFetcher>

      </div>
    );
  }
}

export default ImpactPicture;

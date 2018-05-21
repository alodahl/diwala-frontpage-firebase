import * as React from 'react';
import { TextData } from '../../api/texts';
import PictureFetcher from '../picture_fetcher/PictureFetcher';
import Picture from '../picture/Picture';
// import { urlFor } from '../../core/utilities/image-builder.functions';

class Mission extends React.Component {
  public props: {
    text: TextData,
    pictures: any,
    pictureNames: Array<string>,
    picturePosition?: string,
    textVerticalAlignement?: string,
    extraModules?: any
  };

  findRightText(texts: any, id: string) {
    const textObj = texts.value.find((text: any) => {
      return text.label === id;
    });
    return textObj ? textObj.value : '';
  }

  render() {
    // const pictureNames = this.props.pictureNames;
    console.log(this.props.pictures);
    const title = this.findRightText(this.props.text, 'title');
    const text = this.findRightText(this.props.text, 'text');
    const horisontalPosition = this.props.picturePosition ? `__${this.props.picturePosition}` : '__left';
    const verticalPosition = this.props.textVerticalAlignement ? `__${this.props.textVerticalAlignement}` : '__center';

    return (
      <div className="statement">
        <div className={`column-flex column-flex${horisontalPosition} column-flex${verticalPosition}`}>
          <h2 className={`statement__title statement__title${horisontalPosition}`}>{title}</h2>
          <div className={`statement__text statement__text${horisontalPosition}`}>{text}</div>
          {...this.props.extraModules}
        </div>
        <div className="pictureColumn">
          <PictureFetcher
            pictures={this.props.pictures}
            cropHeight={viewport => 300}
            cropIf={viewport => viewport.width < 2000}
            cropWidth={viewport => 300}
            name={this.props.pictureNames[0]}>
            <Picture src={''} classes={this.props.pictureNames[0]}/>
          </PictureFetcher>
          <PictureFetcher
            pictures={this.props.pictures}
            cropHeight={viewport => 300}
            cropIf={viewport => viewport.width < 2000}
            cropWidth={viewport => 300}
            name={this.props.pictureNames[1]}>
            <Picture src={''} classes={this.props.pictureNames[1]}/>
          </PictureFetcher>
        </div>
      </div>
    );
  }
}

export default Mission;

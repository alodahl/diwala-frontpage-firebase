import * as React from 'react';
import '../../compiled_css/components/picture/Picture.css';

class Picture extends React.Component {
  public props: {
    src: string
  };

  render() {
    return (
      <div className="picture">
        <img src={this.props.src}/>
      </div>
    );
  }
}

export default Picture;

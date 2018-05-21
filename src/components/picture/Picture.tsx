import * as React from 'react';

class Picture extends React.Component {
  public props: {
    src: string;
    classes: any;
  };

  componentDidMount() {
    window.addEventListener('resize', () => this.setState({
      ...this.state // just to make it update
    }));
  }

  render() {
    return (
      <div className={`picture ${this.props.classes}`}>
        <img src={this.props.src}/>
      </div>
    );
  }
}

export default Picture;

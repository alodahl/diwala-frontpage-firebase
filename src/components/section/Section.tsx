import * as React from 'react';

class Section extends React.Component {
  public props: {
    children: any;
    name: string;
    fullWidth?: boolean;
    fullHeight?: boolean;
  };

  public render() {
    return (
      <section 
        id={this.props.name} 
        className={`MainBox__section MainBox__section--${this.props.name} 
          ${this.props.fullWidth ? 'MainBox__section--full-width' : ''} ${this.props.fullHeight ? 'MainBox__section--full-height' : ''}`}>
        {...this.props.children}
      </section>
    );
  }
}

export default Section;

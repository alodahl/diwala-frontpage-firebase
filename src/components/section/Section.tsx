import * as React from 'react';

class Section extends React.Component {
  public props: {
    children: any;
    name: string;
    parentClass: string;
    fullWidth?: boolean;
    fullHeight?: boolean;
  };

  public render() {
    return (
      <section
        id={this.props.name}
        className={`${this.props.parentClass}__section ${this.props.parentClass}__section--${this.props.name}
          ${this.props.fullWidth ? `${this.props.parentClass}__section--full-width` : ''} ${this.props.fullHeight ? `${this.props.parentClass}__section--full-height` : ''}`}>
        {...this.props.children}
      </section>
    );
  }
}

export default Section;

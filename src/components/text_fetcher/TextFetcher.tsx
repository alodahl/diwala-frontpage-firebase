import * as React from 'react';
import { TextData } from '../../api/texts';
import { ReactElement } from 'react';

class TextFetcher extends React.Component {
  public props: {
    children: any;
    id: string;
    texts: TextData[];
  };

  public render() {
    const text = this.props.texts.find(t => t.id === this.props.id);
    if (!text) {
      return null;
    }
    return React.Children.map(this.props.children, (child: ReactElement<any>) => React.cloneElement(child, {text}));
  }
}

export default TextFetcher;
import * as React from 'react';
import '../../../compiled_css/components/buttons/collaboration/Collaboration.css';
import Scrollchor from 'react-scrollchor';

// const url = '#footer';

export default function SlackButton(props: any) {
  // return (
  //   <a className="btn collaboration-button" href={url}>Want to collaborate </a>
  // );
  return (
    <Scrollchor to="#footer" animate={{offset: 20, duration: 600}}>Want to collaborate</Scrollchor>
  );
}

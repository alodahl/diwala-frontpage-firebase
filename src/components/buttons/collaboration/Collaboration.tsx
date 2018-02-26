import * as React from 'react';
import '../../../compiled_css/components/buttons/collaboration/Collaboration.css';
import Scrollchor from 'react-scrollchor';

export default function CollaborationButton(props: any) {
  return (
    <Scrollchor to="#footer" animate={{offset: 20, duration: 600}}>
      <div className="btn collaboration-button">Want to collaborate </div>
    </Scrollchor>
  );
}

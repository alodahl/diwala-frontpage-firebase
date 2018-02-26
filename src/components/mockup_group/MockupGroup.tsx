import * as React from 'react';
import '../../compiled_css/components/mockup_group/MockupGroup.css';

export default function Header(props: any) {
  {/* tslint:disable*/}
  const mock1 = "firebasestorage.googleapis.com/v0/b/diwala-frontpage-dev.appspot.com/o/Shop%20Mockup_with%20Shadow.png?alt=media&token=1960ce0a-2769-4ebd-ad70-632d2e00c079";
  const mock2 = "firebasestorage.googleapis.com/v0/b/diwala-frontpage-dev.appspot.com/o/Skill%20Verification%20x1.png?alt=media&token=b63f5082-76b3-4447-918b-764b1655cfa2";
  const rszUrl = "https://rsz.io/";
  const windowWidth = document.documentElement.clientWidth
  const rszSrc = `${rszUrl}${mock1}?format=auto&ch-width=${windowWidth/4}`;
  const rszSrc2 = `${rszUrl}${mock2}?format=auto&ch-width=${windowWidth/4}`;
  return (
    <div className="center-wrapper">
      <div className='image-container'>
        <img src={rszSrc}/>
        <img src={rszSrc2}/>
      </div>
    </div>
  );
  {/* tslint:disable*/}
}

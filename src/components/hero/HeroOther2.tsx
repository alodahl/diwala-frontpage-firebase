// import React from 'react'
// import ReactPlayer from 'react-player'
//
// export default class Hero extends React.Component {
//
//   public props: {
//     text: TextData,
//     textId: string,
//     tokenVersion?: string | undefined;
//   };
//
//   constructor(props: any){
//     super(props);
//      props.getTexts(loadTexts);
//   };
//
//   render () {
//     return (
//         <div className="website-hero" onMouseOver={() => playVideo()} onMouseOut={() => stopVideo()} >
//           <ReactPlayer url={videoUrl()} playing />
//           {/* <video className="website-hero__video" loop playsInline autoPlay preload="true">
//             <source className="website-hero__video-source" src={videoUrl()} type="video/mp4" />
//           </video> */}
//           <div className={`website-hero__logo ${props.tokenVersion}`}>
//             <div className="website-hero__text">
//               {tokenText}
//             </div>
//           </div>
//         </div>
//     );
//   }
// }

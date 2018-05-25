import React from 'react';

const Video = ({ src }) =>
  <div className="videoContainer">
    <iframe title="turtle-video" src={src}
      frameBorder="0" allowFullScreen className="video"></iframe>
  </div>

  export default Video;
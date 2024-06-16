import React from 'react';

const VideoPlayer = () => (
  <div>
    <video controls>
      <source src="your-video-source.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div>
      <button>Play</button>
      <button>Pause</button>
      <button>Skip Inactivity</button>
    </div>
  </div>
);

export default VideoPlayer;

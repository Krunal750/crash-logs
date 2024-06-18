import React, { useState } from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';


const VideoPlayer = () => {
  const [skipInactivity, setSkipInactivity] = useState(false);
  const [showGraph, setShowGraph] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const videoElement = document.getElementById('video-player');
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSkipInactivity = () => {
    setSkipInactivity(!skipInactivity);
    // Add logic to handle inactivity skipping
  };

  const handleShowHideGraph = () => {
    setShowGraph(!showGraph);
  };

  return (
    <div className="video-player-container">
      <video id="video-player" controls className="video-element">
        <source src="your-video-source.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button>
          <FaStepBackward />
        </button>
        <button>
          <FaStepForward />
        </button>
        <span className="video-time">2:11 / 11:00</span>
      </div>
      <div className="toggle-buttons">
        <button
          className={skipInactivity ? 'active' : 'inactive'}
          onClick={handleSkipInactivity}
        >
          {skipInactivity ? 'Don’t Skip Inactivity' : 'Skip Inactivity'}
        </button>
        <button
          className={showGraph ? 'active' : 'inactive'}
          onClick={handleShowHideGraph}
        >
          {showGraph ? 'Hide Graph' : 'Show Graph'}
        </button>
      </div>
      <div className="timeline">
        <div className="timeline-logs">
          {/* Add logic to display logs on the timeline */}
        </div>
      </div>
      {showGraph && (
        <div className="graphs">
          <div className="graph">Graph 1</div>
          <div className="graph">Graph 2</div>
          <div className="graph">Graph 3</div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;

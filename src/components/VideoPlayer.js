import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';

const VideoPlayer = () => {
  const [skipInactivity, setSkipInactivity] = useState(false);
  const [showGraph, setShowGraph] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const videoElement = document.getElementById('video-player');
    const updateTime = () => {
      setCurrentTime(videoElement.currentTime);
      setDuration(videoElement.duration);
    };
    videoElement.addEventListener('timeupdate', updateTime);
    return () => {
      videoElement.removeEventListener('timeupdate', updateTime);
    };
  }, []);

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
    // Add logic to handle inactivity skipping if needed
  };

  const handleShowHideGraph = () => {
    setShowGraph(!showGraph);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="video-player-container">
      <video id="video-player" controls className="video-element">
        <source src="../assets/logo.jpgsample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='video-btns'>
      <div className="video-controls">
        <button>
          <FaStepBackward />
        </button>
        <button onClick={handlePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        
        <button>
          <FaStepForward />
        </button>
        <span className="video-time">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>

      <div className="toggle-buttons">
        <button
          className={`toggle-button ${skipInactivity ? 'active' : 'inactive'}`}
          onClick={handleSkipInactivity}
        >
          <div className="thumb" />
          
        </button>
        <button
          className={`toggle-button ${showGraph ? 'active' : 'inactive'}`}
          onClick={handleShowHideGraph}
        >
          <div className="thumb" />
        </button>
      </div>
    </div>
      <div className="timeline">
        <div className="timeline-logs">
          {/*  display logs on the timeline */}
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

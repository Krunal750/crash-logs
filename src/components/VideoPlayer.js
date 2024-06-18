import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';

const VideoPlayer = () => {
  const [skipInactivity, setSkipInactivity] = useState(false);
  const [showGraph, setShowGraph] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hoverTime, setHoverTime] = useState(null);
  const [hoverPosition, setHoverPosition] = useState(0);
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
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
    const videoElement = videoRef.current;
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

  const handleMouseMove = (e) => {
    const progressBar = progressBarRef.current;
    const rect = progressBar.getBoundingClientRect();
    const hoverTime = ((e.clientX - rect.left) / rect.width) * duration;
    setHoverTime(hoverTime);
    setHoverPosition(e.clientX - rect.left);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="video-player-container">
      <video id="video-player" ref={videoRef} controls className="video-element">
        <source src="./assets/sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='video-btns'>
        <div className="toggle-buttons">
          <div className='left-tgl'>
            <span>Skip Inactivity</span>
            <button
              className={`toggle-button ${skipInactivity ? 'active' : 'inactive'}`}
              onClick={handleSkipInactivity}
            >
              <div className="thumb" />
            </button>
          </div>
        </div>
        
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
          <div className='right-tgl'>
            <span>{showGraph ? 'Hide Graph' : 'Show Graph'}</span>
            <button
              className={`toggle-button ${showGraph ? 'active' : 'inactive'}`}
              onClick={handleShowHideGraph}
            >
              <div className="thumb" />
            </button>
          </div>
        </div>
      </div>
      <div 
        className="timeline"
        ref={progressBarRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoverTime(null)}
      >
        <div className="timeline-logs">
          {/* display logs on the timeline */}
        </div>
        {hoverTime !== null && (
          <div
            className="thumbnail-preview"
            style={{ left: `${hoverPosition}px` }}
          >
            {formatTime(hoverTime)}
          </div>
        )}
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

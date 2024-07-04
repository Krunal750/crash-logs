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
    if (!videoElement) return;

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
    if (!videoElement) return;

    if (videoElement.paused) {
      videoElement.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error('Failed to start playback:', error);
      });
    } else {
      videoElement.pause();
      setIsPlaying(false);
    }
  };

  const handleSkipInactivity = () => {
    setSkipInactivity(!skipInactivity);
    // Add logic to handle inactivity skipping if needed
  };

  const handleShowHideGraph = () => {
    setShowGraph(!showGraph);
  };

  const handleSkipBackward = () => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    videoElement.currentTime -= 10; // Skip 10 seconds backward
    setCurrentTime(videoElement.currentTime);
  };

  const handleSkipForward = () => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    videoElement.currentTime += 10; // Skip 10 seconds forward
    setCurrentTime(videoElement.currentTime);
  };

  const handleMouseMove = (e) => {
    const progressBar = progressBarRef.current;
    if (!progressBar) return;

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
      <iframe
        title="YouTube Video"
        width="800" // Adjust width as needed
        height="450" // Adjust height as needed
        src="https://www.youtube.com/embed/gPIoZkG5HRk"
        frameBorder="0"
        allowFullScreen
      />
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
          <button onClick={handleSkipBackward}>
            <FaStepBackward />
          </button>
          <button onClick={handlePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={handleSkipForward}>
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
      <div className='abovegraph'><span></span></div>
      {showGraph && (
        <div className="graphs">
          {/* <div className="graph">Graph 1</div>
          <div className="graph">Graph 2</div>
          <div className="graph">Graph 3</div> */}
          <h3 className='graph'>Graphs Are Coming Soon...</h3>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;

import React from 'react';
import Header from './components/Header';
import Activity from './components/Activity';
import Logs from './components/Logs';
import VideoPlayer from './components/VideoPlayer';
import './styles/main.css';

const App = () => (
  <div className="app">
    <Header />
    <div className="content">
      <div className="left-pane">
        <Activity />
      </div>
      <div className="main-pane">
        <VideoPlayer />
      </div>
      <div className="right-pane">
        <Logs />
      </div>
    </div>
  </div>
);

export default App;

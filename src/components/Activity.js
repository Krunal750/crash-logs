import React, { useState } from 'react';
import { PiCaretCircleUp, PiCaretCircleDown } from "react-icons/pi";

const Activity = () => {
  const [isSessionInfoVisible, setIsSessionInfoVisible] = useState(false);
  const [areNotesVisible, setAreNotesVisible] = useState(false);

  const toggleSessionInfoVisibility = () => {
    setIsSessionInfoVisible(!isSessionInfoVisible);
  };

  const toggleNotesVisibility = () => {
    setAreNotesVisible(!areNotesVisible);
  };

  return (
    <aside className="sidebar">
      <div className="activity-section">
        <h2>Activity</h2>
        <div className="session-info">
          <h4 onClick={toggleSessionInfoVisibility} className="collapsible-header">
            <span>{isSessionInfoVisible ? <PiCaretCircleUp /> : <PiCaretCircleDown />}</span>
            Session Info
          </h4>
          {isSessionInfoVisible && (
            <div className="session-details">
              <p>Project Name: ps-mac-service</p>
              <p>Source Name: Adobe Photoshop</p>
              <p>Source Version: 25.6.0</p>
              <p>Crash OS: MAC-ARM-64</p>
              <p>Event Session GUID: 130cfc64-...</p>
              <p>Event User GUID: 24ADL...@AdobeID</p>
            </div>
          )}
        </div>
      
      <div className="notes-section">
        <h4 onClick={toggleNotesVisibility} className="collapsible-header">
          <span>{areNotesVisible ? <PiCaretCircleUp /> : <PiCaretCircleDown />}</span>
          Notes
        </h4>
        {areNotesVisible && ( 
          <div className="notes-details">
            <button>Add</button>
          </div>
        )}
      </div>
      </div>
    </aside>
  );
};

export default Activity;

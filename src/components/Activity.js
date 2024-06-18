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
              <p>Project Name</p> 
              <p><b>ps-mac-sevice</b></p>
              <p>Source Name</p>
              <p><b>Adobe Photoshop</b></p>
              <p>Source Version</p>
              <p><b>25.6.0</b></p>
              <p>Source Platform</p>
              <p><b>MAC-ARM-64</b></p>
              <p>Event Session GUID</p>
              <p><b>130efc64-e1ab-4d22-8953-b017cb8dcb4b</b></p>
              <p>Event User GUID</p>
              <p><b>66F122964D0F63360A746C14@AdobeID</b></p>

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

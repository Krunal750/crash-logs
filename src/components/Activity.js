import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons

const Activity = () => {
  const [isSessionInfoVisible, setIsSessionInfoVisible] = useState(false);

  const toggleSessionInfoVisibility = () => {
    setIsSessionInfoVisible(!isSessionInfoVisible);
  };

  return (
    <aside className="sidebar">
      <div className="activity-section">
        <h2>Activity</h2>
        <div className="session-info">
          <h3 onClick={toggleSessionInfoVisibility} className="collapsible-header">
            Session Info {isSessionInfoVisible ? <FaChevronUp /> : <FaChevronDown />}
          </h3>
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
      </div>
      <div className="notes-section">
        <h3 onClick={toggleSessionInfoVisibility} className="collapsible-header">Notes {isSessionInfoVisible ? <FaChevronUp /> : <FaChevronDown />}</h3>
        {isSessionInfoVisible && ( 
          <div className="notes-details">
            <button>Add</button>
            </div>
        )}
      </div>
    </aside>
  );
};

export default Activity;

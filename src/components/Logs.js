import React, { useState } from 'react';
import { FaSearch, FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';

const Logs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedLog, setExpandedLog] = useState(null);

  const logs = [
    { id: 1, time: "00:48:1", type: "Launch", workflow: "Generative Fill", subtype: "Generate", eventType: "Success" },
    { id: 2, time: "00:48:3", type: "Select", workflow: "Generative Fill", subtype: "Generate", eventType: "Success" },
    { id: 3, time: "00:48:4", type: "Generative Fill", workflow: "Generative Fill", subtype: "Generate", eventType: "Success" },
    { id: 4, time: "00:48:4", type: "Save", workflow: "Generative Fill", subtype: "Generate", eventType: "Success" }
  ];

  const filteredLogs = logs.filter(log => log.type.toLowerCase().includes(searchTerm.toLowerCase()));

  const toggleLogVisibility = (id) => {
    setExpandedLog(expandedLog === id ? null : id);
  };

  return (
    <aside className="logs">
      <h2>Logs</h2>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Filter Event"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && <FaTimes className="clear-icon" onClick={() => setSearchTerm('')} />}
      </div>
      {filteredLogs.map(log => (
        <div key={log.id} className="log-event">
          <h3 onClick={() => toggleLogVisibility(log.id)} className="collapsible-header">
            {log.time} {log.type} {expandedLog === log.id ? <FaChevronUp /> : <FaChevronDown />}
          </h3>
          {expandedLog === log.id && (
            <div className="log-details">
              <p>Event Workflow: {log.workflow}</p>
              <p>Event Subtype: {log.subtype}</p>
              <p>Event Type: {log.eventType}</p>
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default Logs;

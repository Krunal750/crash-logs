import React, { useState } from 'react';
import { RxDragHandleDots2 } from "react-icons/rx";
import { PiCaretCircleUp, PiCaretCircleDown } from "react-icons/pi";
import { FaTimes, FaTrash } from 'react-icons/fa';
import { FiSearch } from "react-icons/fi";

const Logs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [logs, setLogs] = useState([
    { id: 1, time: "00:48:1", type: "Launch", custum_hb_type: "feature", Event_workflow: "Generative Fill", Event_Subcategory: "Operation", Event_subtype: "Generate", EventType: "Success", Custum_hb_Params: "history|zunlocalize|generative-fill", UI_View_Type: "History", Event_Value: "event value" },
    { id: 2, time: "00:48:3", type: "Select", custum_hb_type: "feature", Event_workflow: "Generative Fill", Event_Subcategory: "Operation", Event_subtype: "Generate", EventType: "Success", Custum_hb_Params: "history|zunlocalize|generative-fill", UI_View_Type: "History", Event_Value: "event value" },
    { id: 3, time: "00:48:4", type: "Generative Fill", custum_hb_type: "feature", Event_workflow: "Generative Fill", Event_Subcategory: "Operation", Event_subtype: "Generate", EventType: "Success", Custum_hb_Params: "history|zunlocalize|generative-fill", UI_View_Type: "History", Event_Value: "event value" },
    { id: 4, time: "00:48:4", type: "Save", custum_hb_type: "feature", Event_workflow: "Generative Fill", Event_Subcategory: "Operation", Event_subtype: "Generate", EventType: "Success", Custum_hb_Params: "history|zunlocalize|generative-fill", UI_View_Type: "History", Event_Value: "event value" }
  ]);
  const [expandedLog, setExpandedLog] = useState(null); // State for expanded log

  const filteredLogs = logs.filter(log =>
    log.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.Event_workflow.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.Event_Subcategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.Event_subtype.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.EventType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteEvent = (eventName) => {
    const updatedLogs = logs.filter(log => !log.type.toLowerCase().includes(eventName.toLowerCase()));
    setLogs(updatedLogs);
    setExpandedLog(null); // Reset expanded log state after deletion
  };

  const toggleLogVisibility = (id) => {
    setExpandedLog(expandedLog === id ? null : id);
  };

  return (
    <aside className="logs">
      <h2> <RxDragHandleDots2 /> Logs</h2>
      <div className="search-container">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Filter Event"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && <FaTimes className="clear-icon" onClick={() => setSearchTerm('')} />}
      </div>
      {searchTerm && (
        <div className="filtered-event">
          <h3>Filtered Event: {searchTerm}</h3>
          <button className="delete-event-btn" onClick={() => handleDeleteEvent(searchTerm)}>Delete All</button>
        </div>
      )}
      <div className="logs-container">
        {filteredLogs.map(log => (
          <div key={log.id} className="log-event">
            <h4 onClick={() => toggleLogVisibility(log.id)} className="collapsible-header">
              <span>{expandedLog === log.id ? <PiCaretCircleUp /> : <PiCaretCircleDown />}</span>
              {log.time} {log.type}
            </h4>
            {expandedLog === log.id && (
              <div className="log-details">
                <p>custum_hb_type</p> <p> <b>{log.custum_hb_type}</b></p>
                <p>Event Workflow </p> <p> <b>{log.Event_workflow}</b></p>
                <p>Event Subcategory </p> <p> <b>{log.Event_Subcategory}</b></p>
                <p>Event subtype</p> <p> <b>{log.Event_subtype}</b></p>
                <p>Event Type</p> <p> <b>{log.EventType}</b></p>
                <p>Custum_hb_Params</p> <p> <b>{log.Custum_hb_Params}</b></p>
                <p>UI View Type</p> <p> <b>{log.UI_View_Type}</b></p>
                <p>Event Value</p> <p>  <b>{log.Event_Value}</b></p>
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Logs;

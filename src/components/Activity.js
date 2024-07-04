import React, { useState } from 'react';
import { PiCaretCircleUp, PiCaretCircleDown } from "react-icons/pi";

const Activity = () => {
  const [isSessionInfoVisible, setIsSessionInfoVisible] = useState(false);
  const [areNotesVisible, setAreNotesVisible] = useState(false);
  const [isWriting, setIsWriting] = useState(false);
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState('');
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

  const toggleSessionInfoVisibility = () => {
    setIsSessionInfoVisible(!isSessionInfoVisible);
  };

  const toggleNotesVisibility = () => {
    setAreNotesVisible(!areNotesVisible);
  };

  const handleAddNote = () => {
    setIsWriting(true);
  };

  const handleSaveNote = () => {
    const timestamp = new Date().toLocaleString();
    if (selectedNoteIndex !== null) {
      // Update existing note
      const updatedNotes = [...notes];
      updatedNotes[selectedNoteIndex] = { note, timestamp };
      setNotes(updatedNotes);
    } else {
      // Add new note
      setNotes([{ note, timestamp }, ...notes]);
    }
    setNote('');
    setIsWriting(false);
    setSelectedNoteIndex(null); // Reset selected note index
  };

  const handleCancel = () => {
    setNote('');
    setIsWriting(false);
    setSelectedNoteIndex(null); // Reset selected note index
  };

  const handleEditNote = (index) => {
    const selectedNote = notes[index];
    setNote(selectedNote.note);
    setSelectedNoteIndex(index);
    setIsWriting(true);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
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
      </div>
      
      <div className="notes-section">
        <h4 onClick={toggleNotesVisibility} className="collapsible-header">
          <span>{areNotesVisible ? <PiCaretCircleUp /> : <PiCaretCircleDown />}</span>
          Notes
        </h4>
        <div className='notes-container'>
          {areNotesVisible && (
            <div className="notes-details">
              <button onClick={handleAddNote} className="add-note-button">Add Note</button>
              {isWriting && (
                <div className="note-writing">
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Enter your note here..."
                  />
                  <div className="note-actions">
                    <button onClick={handleSaveNote}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </div>
                </div>
              )}
              {notes.map((item, index) => (
                <div key={index} className="note-item" onClick={() => handleEditNote(index)}>
                  <h3 className="timestamp">{item.timestamp}</h3>
                  <p>{item.note}</p>
                  <div className="note-actions">
                    <button onClick={(e) => { e.stopPropagation(); handleDeleteNote(index); }}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Activity;

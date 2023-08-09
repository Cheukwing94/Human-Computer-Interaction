import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShowJournal = ({ journalEntries }) => {
  const [selectedEntry, setSelectedEntry] = useState(null);
  const navigate = useNavigate();


  const handleEntryClick = (entry) => {
    setSelectedEntry(entry);
  };

  const handleBackClick = () => {
    setSelectedEntry(null);
  };



  return (
    <div className="showjournal">
      <div className="journal_entries">
        <h2>Your Journal Entries:</h2>
        {journalEntries.map((entry, index) => (
          <div className="journal_entry" key={index}>
            <div className="journal_date">{entry.date}</div>
            <div className="journal_title_show" onClick={() => handleEntryClick(entry)}>
              {entry.title}
              <div className="journal_time"> {entry.time}</div>
            </div>

            {selectedEntry === entry &&
              <div className="journal_modal">
                <div className="journal_modal_content">
                  <span className="journal_modal_close" onClick={handleBackClick}>
                    &times;
                  </span>
                  <h2>Title: {entry.title}</h2>
                  <div className="journal_modal_body">Content: {entry.content}</div>
                </div>
              </div>
            }

          </div>
        ))}
      </div>

      {/* {selectedEntry && (
        <div className="journal_modal">
          <div className="journal_modal_content">
            <span className="journal_modal_close" onClick={handleBackClick}>
              &times;
            </span>
            <h2>Title: {selectedEntry.title}</h2>
            <div className="journal_modal_body">Content: {selectedEntry.content}</div>
          </div>
        </div>
      )} */}

      <div className="back_btn">
        <button className="back_journal" onClick={() => navigate('/journey')}>
          Back to Write Journal
        </button>
      </div>
    </div>
  );
};

export default ShowJournal;

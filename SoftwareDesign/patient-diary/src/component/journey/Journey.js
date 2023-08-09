import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";

const Journey = ({ onAddJournalEntry }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const handleSubmit = () => {
    if (title === "" || content === "") {
      setError("Please fill in all fields");
    } else {
      const entry = {
        date: startDate.toLocaleDateString(),
        time: startDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
        title,
        content,
      };

      onAddJournalEntry(entry);
      navigate("/showjournal");
    }
  };


  return (
    <div className="journal">
      <div className="datepicker">
        <DatePicker
          customInput={<ExampleCustomInput />}
          dateFormat="dd / MM / yyyy"
          closeOnScroll={true}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />

      </div>
      <div className="journal_input">
        <label htmlFor="Title">Title: </label>
        <br />
        <input
          className="journal_title"
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="Journal">Journal: </label>
        <br />
        <div className="frame_css">
          <textarea
            className="journal_frame"
            id="journal"
            name="journal"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {error && <p className="error-message" style={{ marginLeft: "15px" }}>{error}</p>}

        <div className="submit_btn">
          <button className="submit_journal" onClick={handleSubmit}>
            Submit
          </button>
          <button className="back_journal" onClick={() => navigate('/showjournal')}>
            Back to journal review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Journey;

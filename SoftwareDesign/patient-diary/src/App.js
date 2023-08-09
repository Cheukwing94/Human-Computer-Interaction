import React, {useState, useEffect} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './component/navbar/NavBar';
import Login from './component/login/Login';
import CreateAcc from './component/createAcc/CreateAcc';
import PatientCalendar from './component/calendar/PatientCalendar';
import Journey from './component/journey/Journey';
import Symptoms from './component/symptoms/Symptoms';
import Settings from './component/settings/Settings';
import ShowJournal from "./component/journey/ShowJournal";





function App() {

  const [journalEntries, setJournalEntries] = useState([]);

  const handleJournalSubmit = (entry) => {
    setJournalEntries([...journalEntries, entry]);
  };

  useEffect(() => {
    window.addEventListener('beforeunload', (ev) => {
      ev.preventDefault();
      ev.returnValue = '';
    });

    return () => {
      window.removeEventListener('beforeunload', () => {});
    };
  }, []);

  useEffect(() => {
    const lastVisitedDate = localStorage.getItem('lastVisitedDate');
  
    if (!lastVisitedDate || Date.now() - lastVisitedDate > 24 * 60 * 60 * 1000) {
      alert("Don't forget to write your journal and rate your emotion today! :)");
    }
  
    localStorage.setItem('lastVisitedDate', Date.now());
  
    return () => {
      localStorage.removeItem('lastVisitedDate');
    };
  }, []);
  
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='create' element={<CreateAcc />} />
      <Route element={<NavBar />}>
          <Route path='calendar' element={<PatientCalendar />} />
          <Route path='journey' element={<Journey onAddJournalEntry={handleJournalSubmit}/>} /> 
          <Route path='showjournal' element={<ShowJournal journalEntries={journalEntries}/>} /> 
          <Route path='symptoms' element={<Symptoms />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

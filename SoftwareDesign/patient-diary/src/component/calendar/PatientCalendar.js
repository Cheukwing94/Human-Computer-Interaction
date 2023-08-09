import React, { useState } from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from 'moment';
import DatePicker from "react-datepicker";
import { BsCalendarMonth, BsCalendarWeek, BsCalendarDay } from 'react-icons/bs'
import { TfiAgenda } from 'react-icons/tfi'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

const localizer = momentLocalizer(moment);

const dayPropGetter = date => {
    const dayName = moment(date).format('ddd'); 
    return { className: `day-${dayName.toLowerCase()}` }; 
};

const events = [];

const eventColors = {
    event: '#7498ce',
    journal: 'green',
};


const PatientCalendar = () => {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "", type: "event" });
    const [allEvents, setAllEvents] = useState(events);
    const dayHeaderFormat = 'ddd';

    function handleAddEvent() {

        for (let i = 0; i < allEvents.length; i++) {

            const d1 = new Date(allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);

            if (
                ((d1 <= d2) && (d2 <= d3)) || ((d1 <= d4) &&
                    (d4 <= d3))
            ) {
                alert("Added " + newEvent);
                break;
            }

        }


        setAllEvents([...allEvents, newEvent]);
        setNewEvent({ title: "", start: "", end: "", type: "event" }); 

    }

    const eventStyleGetter = (event) => {
        return {
            style: {
                backgroundColor: eventColors[event.type],
            },
        };
    };




    return (
        <div className="App">

            <div className="calendar">
                <h1>Calendar</h1>
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker
                    placeholderText="Start Date"
                    className="datepickersCal"
                    calendarClassName="caldatepicker"
                    style={{ marginRight: "10px" }}
                    selected={newEvent.start}
                    onChange={(start) => setNewEvent({ ...newEvent, start })}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    withPortal
                />
                <DatePicker
                    placeholderText="End Date"
                    calendarClassName="caldatepicker"
                    selected={newEvent.end}
                    onChange={(end) => setNewEvent({ ...newEvent, end })}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    withPortal
                />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <div className="schedule">
                <Calendar
                    components={{
                        toolbar: props => {
                            const { label } = props;
                            return (
                                <div className="rbc-toolbar">
                                    <span className="rbc-btn-group">
                                        <div className="rbc-btn-left">
                                            <button type="button" className="rbc-btn rbc-prev-btn" onClick={() => props.onNavigate('PREV')}>
                                                <GrFormPrevious />
                                            </button>
                                            <button type="button" className="rbc-btn rbc-next-btn" onClick={() => props.onNavigate('NEXT')}>
                                                <GrFormNext />
                                            </button>
                                        </div>
                                        <div className="rbc-btn-middle">
                                            <span className="rbc-toolbar-label">{label}</span>
                                        </div>
                                        <div className="rbc-btn-right">
                                            <button
                                                type="button"
                                                className={
                                                    props.view === Views.MONTH
                                                        ? 'rbc-btn rbc-active'
                                                        : 'rbc-btn'
                                                }
                                                onClick={() => props.onView(Views.MONTH)}
                                            >
                                                <BsCalendarMonth />
                                            </button>
                                            <button
                                                type="button"
                                                className={
                                                    props.view === Views.WEEK
                                                        ? 'rbc-btn rbc-active'
                                                        : 'rbc-btn'
                                                }
                                                onClick={() => props.onView(Views.WEEK)}
                                            >
                                                <BsCalendarWeek />
                                            </button>
                                            <button
                                                type="button"
                                                className={
                                                    props.view === Views.DAY
                                                        ? 'rbc-btn rbc-active'
                                                        : 'rbc-btn'
                                                }
                                                onClick={() => props.onView(Views.DAY)}
                                            >
                                                <BsCalendarDay />
                                            </button>
                                            <button
                                                type="button"
                                                className={
                                                    props.view === Views.AGENDA
                                                        ? 'rbc-btn rbc-active'
                                                        : 'rbc-btn'
                                                }
                                                onClick={() => props.onView(Views.AGENDA)}
                                            >
                                                <TfiAgenda />
                                            </button>
                                        </div>
                                    </span>

                                </div>

                            );
                        },
                    }}
                    dayFormat={dayHeaderFormat}
                    localizer={localizer}
                    events={allEvents}
                    startAccessor="start"
                    endAccessor="end"
                    dayPropGetter={dayPropGetter}
                    eventPropGetter={eventStyleGetter}
                />
            </div>

        </div>
    );
}

export default PatientCalendar;
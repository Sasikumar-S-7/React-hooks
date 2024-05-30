import '../Styles/Calender.css';
import React, { useState } from 'react';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const Calender = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const dayInMonth = () => {
        const daysArray = [];
        const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
        const lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
        for (let i = 0; i < firstDay.getDay(); i++) {
            daysArray.push(null);
        }
        for (let i = 1; i <= lastDay.getDate(); i++) {
            daysArray.push(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i));
        }
        return daysArray;
    }

    const chMonth = (e) => {
        const newMonth = parseInt(e.target.value, 10);
        setSelectedDate(new Date(selectedDate.getFullYear(), newMonth, 1));
    }
    
    const chYear = (e) => {
        const newYear = parseInt(e.target.value, 10);
        setSelectedDate(new Date(newYear, selectedDate.getMonth(), 1));
    }

    const isSameDay = (date1, date2) => {
        return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
    };

    return (
        <>
            <div className="row justify-content-center my-5">
                <div className="col-md-6 bg-secondary shadow-lg p-5 rounded-4">
                    <div className="header">
                        <button className='btn btn-success' onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}>Backward</button>
                        <select value={selectedDate.getMonth()} onChange={chMonth}>
                            {months.map((month, index) => (
                                <option key={index} value={index}>{month}</option>
                            ))}
                        </select>
                        <select value={selectedDate.getFullYear()} onChange={chYear}>
                            {Array.from({ length: 10 }, (_, i) => selectedDate.getFullYear() - 5 + i).map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                        <button className='btn btn-success' onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}>Forward</button>
                    </div>
                    <div className="daysofweek">
                        {daysOfWeek.map((day, index) => (
                            <div key={index} className='text-danger'>{day}</div>
                        ))}
                    </div>
                    <div className="days">
                        {dayInMonth().map((day, index) => (
                            <div key={index} className={day ? (isSameDay(day, new Date()) ? "days current" : "days") : "empty"}>{day ? day.getDate() : ""}</div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

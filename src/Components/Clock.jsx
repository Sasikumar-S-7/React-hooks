import '../Styles/Clock.css';
import React, { useEffect, useState } from 'react'

export const Clock = () => {
    const [currenttime, setcurrenttime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setcurrenttime(new Date());
        }, []);
        return () => clearInterval(timer);
    });

    const leadingzerro = (num) => {
        return num < 10 ? `0${num}` : num;
    }
    const formathour = (hour) => {
        return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    }
    const formatDate = (date) => {
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString(undefined, options);
    }

    return (
        <>
            <div className="row justify-content-center my-5">
                <div className=" col-md-6 bg-secondary shadow-lg p-5 rounded-4">
                    <div className="digital-clock text-center">
                        <h1 className='my-4 text-info'>Digital Clock</h1>
                        <div className="time my-4 text-warning">{leadingzerro(formathour(currenttime.getHours()))}
                            : {leadingzerro(currenttime.getMinutes())}
                            : {leadingzerro(currenttime.getSeconds())}
                              {currenttime.getHours() >= 12 ? " PM" : " AM"}</div>
                        <div className="date my-4 text-primary">{formatDate(currenttime)}</div>
                    </div>
                </div>
            </div>

        </>
    );
};


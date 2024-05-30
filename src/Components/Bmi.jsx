import React, { useState } from 'react'
import '../Styles/Bmi.css';
export const Bmi = () => {
    const [height, setheight] = useState("");
    const [weight, setweight] = useState("");
    const [bmi, setbmi] = useState(null);
    const [status, setstatus] = useState("");
    const [errormsg, seterrormsg] = useState("")

    const calculateBmi = () => {
        const isvalidheight = /^\d+$/.test(height);
        const isvalidweight = /^\d+$/.test(weight);
        if (isvalidheight && isvalidweight) {
            const heightInMeter = height / 100;
            const bmivalue = weight / (heightInMeter * heightInMeter);
            setbmi(bmivalue.toFixed(2));
            if (bmivalue < 18.5) {
                setstatus("Under weight");
            }
            else if (bmivalue >= 18.5 && bmivalue < 24.9) {
                setstatus("Normal weight");
            }
            else if (bmivalue >= 25 && bmivalue < 29.9) {
                setstatus("Over weight");
            }
            else {
                setstatus("Obese")
            }
            seterrormsg("")
        }
        else {
            setbmi(null);
            setstatus("");
            seterrormsg("Please enter valid data...");
        }
    }

    const cleardata = () => {
        setheight("")
        setweight("")
        setbmi(null);
        setstatus("")
    }
    return (
        <>
            <div className="row justify-content-center my-5">
                <div className="col-md-6 bg-secondary shadow-lg p-5 rounded-4" >
                    <div className="bmi-calc">
                        <div className="box">
                            <div className="data">
                                <h1>BMI Calculator</h1>
                                {errormsg && <p className='text-danger '>{errormsg}</p>}
                                <div className="input-container">
                                    <label htmlFor="height">Height (cm)</label>
                                    <input type="text" id='height' value={height} onChange={(e) => setheight(e.target.value)} />
                                </div>
                                <div className="input-container">
                                    <label htmlFor="Weight">Weight (kg)</label>
                                    <input type="text" id='Weight' value={weight} onChange={(e) => setweight(e.target.value)} />
                                </div>
                                <button className='btn btn-success' onClick={calculateBmi}>Calculate BMI</button>
                                <button className='btn btn-outline-danger mx-5' onClick={cleardata}>Clear</button>
                                {bmi !== null &&
                                    <div className="result">
                                        <p>Your BMI is : {bmi}</p>
                                        <p>Status : {status}</p>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

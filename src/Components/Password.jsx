import '../Styles/Password.css';
import React, { useState } from 'react'

export const Password = () => {
    const [len, setlen] = useState(5);
    const [upper, setupper] = useState(true);
    const [lower, setlower] = useState(false);
    const [number, setnumber] = useState(false);
    const [symbol, setsymbol] = useState(false);
    const [pass, setpass] = useState("");

    const genpass = () => {
        let charset = ""; // Changed const to let
        if (upper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lower) charset += "abcdefghijklmnopqrstuvwxyz";
        if (number) charset += "1234567890";
        if (symbol) charset += "!@#$%^&*()_+-";
        let passwordgen = "";
        for (let i = 0; i < len; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            passwordgen += charset[randomIndex];
        }
        setpass(passwordgen);
    }

    const copypass=()=>{
        navigator.clipboard.writeText(pass);
        alert("Password copied successfully");
    }
    return (
        <>
            <div className="row justify-content-center my-5">
                <div className=" col-md-6 bg-secondary shadow-lg pt-2 pb-2 pe-4 ps-4 rounded-4">
                    <h1 className='text-center text-warning my-4'>Strong Password Generator</h1>
                    <div className="my-2 text-center">
                        <label htmlFor="num">Password Length </label><br />
                        <input type="number" id="num" value={len} onChange={(e) => setlen(parseInt(e.target.value))} />
                    </div>
                    <div className='d-flex my-2'>
                        <div className="input-group">
                            <input type="checkbox" id="upper" checked={upper} onChange={(e) => setupper(e.target.checked)} className='me-2' />
                            <label htmlFor="upper">Include UpperCase</label>
                        </div>
                        <div className="input-group">
                            <input type="checkbox" id="lower" checked={lower} onChange={(e) => setlower(e.target.checked)} className='me-2' />
                            <label htmlFor="lower">Include LowerCase</label>
                        </div>
                        <div className="input-group">
                            <input type="checkbox" id="number" checked={number} onChange={(e) => setnumber(e.target.checked)} className='me-2' />
                            <label htmlFor="number">Include Number</label>
                        </div>
                        <div className="input-group">
                            <input type="checkbox" id="symbol" checked={symbol} onChange={(e) => setsymbol(e.target.checked)} className='me-2' />
                            <label htmlFor="symbol">Include Symbol</label>
                        </div>
                    </div>
                    <div className='mb-5 mt-4 text-center'>
                        <button className='btn btn-success' onClick={genpass}>Generaate Password</button>
                    </div>
                    <div className="gen-pass">
                        <input type="text" value={pass} readOnly />
                        <div className='text-center'>
                            <button className='btn btn-warning' onClick={copypass}>copy</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

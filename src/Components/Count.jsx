import React, { useState } from 'react';
import '../Styles/Count.css';

const CountCode = () => {
    const [count, setCount] = useState(1);
    const [num, setNum] = useState(0);
    const [op, setOp] = useState("+");

    const [user, setUser] = useState({ names: "Rameshkannan S", age: "24" });

    const changenumber = (e) => {
        setNum(e.target.value);
    };

    const changeoperator = (e) => {
        setOp(e.target.value);
    };

    const increase = () => {
        const result = eval(`${count} ${op} ${num}`);
        setCount(result);
    };

    const changename = (e) => {
        setUser({ ...user, names: e.target.value });
    };

    const changeage = (e) => {
        setUser({ ...user, age: e.target.value });
    };

    return (
        <>
            <div className='row justify-content-center my-5'>
                <div className='col-md-6 shadow-lg p-5 text-center'>
                    <h1 className='text-secondary'>COUNTING & DECOUNTING</h1>
                    <h1 className='text-primary'>{count}</h1>
                    <div className='d-flex justify-content-around my-4'>
                        <button className='btn btn-outline-success' onClick={() => increase()}>counting or decounting</button>

                        <input type="number" value={num} placeholder='inc or dec by number' onChange={(e) => changenumber(e)} />
                        <select value={op} onChange={(e) => changeoperator(e)}>
                            <option value="+">ADD</option>
                            <option value="-">SUB</option>
                            <option value="*">MULT</option>
                            <option value="/">DIV</option>
                            <option value="%">MOD</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='row justify-content-center my-5'>
                <div className='col-md-6 shadow-lg p-5 text-center'>
                    <h1 className='text-success'>My name is {user.names} and my age is {user.age}</h1>
                    <input type="text" placeholder='Enter name' value={user.names} onChange={(e) => changename(e)} />
                    <input type="text" placeholder='Enter age' value={user.age} onChange={(e) => changeage(e)} />
                </div>
            </div>
        </>
    );
};

const Count = () => {
    return (
        <>
            <CountCode />
        </>
    );
};

export default Count;

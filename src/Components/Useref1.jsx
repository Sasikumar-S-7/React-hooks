import '../Styles/Useref1.css';
import React, { useEffect, useRef, useState } from 'react';

export const Useref1 = () => {
    const [name, setName] = useState('');
    
    const count = useRef(1);

    const prename = useRef('');

    const refcount = useRef(0);
    const getdom = useRef(null);
    const [getdata, setgetdata] = useState('');
    const [selects, setSelect] = useState('');

    useEffect(() => {
        count.current += 1;
    });

    useEffect(() => {
        prename.current = name;
    });

    const handleRefCount = () => {
        refcount.current += 1;
    };

    const getsdom = () => {
        const news = getdom.current[selects];
        setgetdata(news);
    };

    return (
        <>
            <div className='row justify-content-center my-5'>
                <div className='col-md-6 shadow-lg p-5 text-center'>
                    <input name="Input name" ref={getdom} alt='inputs' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <h1>My data is <span className='text-success'>{name ? name : "empty"}</span></h1>
                    <hr />


                    <h5>Component rendering count: {count.current}</h5>
                    <hr />

                    <h6>Previous data is: {prename.current}</h6>

                    <hr />

                    <button className='btn btn-warning' onClick={handleRefCount}>Refcount</button>
                    <p>Reference value count: {refcount.current}</p>

                    <hr />

                    <label htmlFor="attri">Text input field Attributes: </label>
                    <select className='mb-4' name="Attributes" id="attri" onChange={(e) => setSelect(e.target.value)}>
                        <option value="">select</option>
                        <option value="type">Type</option>
                        <option value="value">Value</option>
                        <option value="name">Name</option>
                        <option value="alt">Alt</option>
                    </select>
                    <br />
                    <button className='btn btn-success' onClick={getsdom}>Get dom data</button>
                    <h4 className='mt-4'>Get DOM Access: <span className='text-info'>{getdata ? getdata : "Empty" }</span></h4>

                    
                </div>
            </div>
        </>
    );
};

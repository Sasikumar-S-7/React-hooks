import React, { useEffect, useState, useRef } from 'react'

export const Useref2 = () => {


    const [name, setName] = useState('');


    const count = useRef(0);
    useEffect(() => {
        count.current += 1;
    });


    const prename = useRef('');
    useEffect(() => {
        prename.current = name;
    });


    const refcount = useRef(0);
    const handleRefCount = () => {
        refcount.current += 1;
    };



    const dom = useRef(null);
    const[getdom, setgetdom] = useState('')
    useEffect(()=>{
        setgetdom(()=>dom.current.type)
    })

    return (
        <>
            <div className="row justify-content-center my-5">
                <div className=" col-md-6  shadow-lg pt-2 pb-2 pe-4 ps-4 rounded-4">

                    <input name="Input name" ref={dom} alt='inputs' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <h1>My data is <span className='text-success'>{name ? name : "empty"}</span></h1>


                    <h5>Component rendering count: {count.current}</h5>


                    <h6>Previous data is: {prename.current}</h6>


                    <button className='btn btn-warning' onClick={handleRefCount}>Refcount</button>
                    <p>Reference value count: {refcount.current}</p>


                    <h1>Dom value: {getdom}</h1>

                </div>
            </div>
        </>
    );
};

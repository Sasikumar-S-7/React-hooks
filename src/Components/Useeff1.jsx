import React, { useEffect, useState } from 'react'

export const Useeff1 = () => {
    const [count, setcount] = useState(0);
    const [time, settime] = useState(0);


    useEffect(()=>{
        const random  = Math.floor(Math.random()*1000);
        const timer = setInterval(()=>{
                console.log(`${random} - rerender`)
        },1000);
        return()=> clearInterval(timer);
        
    },[count]);


    return (
        <>
            <div className="text-center my-5">
                <h3>Count : {count}</h3>
                <h3>Time : {time}</h3>
                <div className="my-5">
                    <button className='btn btn-danger mx-5' onClick={()=>setcount(count-1)}> - </button>
                    <button className='btn btn-success mx-5' onClick={()=>setcount(count+1)}> + </button>
                    <button className='btn btn-success mx-5' onClick={()=>settime(time+1)}> T </button>
                </div>
            </div>
        </>
    );
};

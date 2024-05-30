import '../Styles/Api.css'
import React, { useEffect, useState } from 'react';
const ApiCode = () => {
    const [oldad, newad] = useState("Please click button and get API Advice");
    const [count, recount] = useState(0);
  
    const getadvice = async () => {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      newad(data.slip.advice);
      recount((co)=>co+1);
    };
    useEffect(()=>{
      getadvice();
    },[]);
    return (
      <>
        <div className='row justify-content-center my-5 text-center'>
          <div className='col-md-6 col-sm-12 p-5 shadow-lg'>
            <h5 className='text-secondary'>{oldad}</h5>
            <div className='mt-4'>
              <button className='btn btn-outline-warning' onClick={()=>getadvice()}><span className='text-success'>{count} </span>Generate</button>
            </div>
          </div>
        </div>
      </>
    );
};

const Api = () => {
    return (
        <>
            <ApiCode />
        </>
    );
};
export default Api;
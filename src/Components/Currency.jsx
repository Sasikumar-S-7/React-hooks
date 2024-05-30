import '../Styles/Currency.css'
import React, { useEffect, useState } from 'react'
import axios from "axios";
export const Currency = () => {
    const [amount, setamount] = useState(1);
    const [fromcurrency, setfromcurrency] = useState("USD");
    const [tocurrency, settocurrency] = useState("INR");
    const [convamt, setconvamt] = useState(null);
    const [exchangerate, setexchangerate]=useState("")

    useEffect(() => {
        const getex = async() =>{
            try{
            let url = `https://api.exchangerate-api.com/v4/latest/${fromcurrency}`;
            const responce = await axios.get(url);
            // console.log(responce);
            setexchangerate(responce.data.rates[tocurrency]);
            }catch(error){
                console.error("Error fetching rate: ",error);
            }
        }
        getex();
    },[fromcurrency, tocurrency]);

    useEffect(()=>{
        if(exchangerate !== null){
            setconvamt((amount*exchangerate).toFixed(2))
        }
    },[amount,exchangerate]);

    const changeamt=(e)=>{
        const value = parseFloat(e.target.value);
        setamount(isNaN(value)?0:value);
    }
    const changeformcurr=(e)=>{
        setfromcurrency(e.target.value);
    }
    const changetocurr=(e)=>{
        settocurrency(e.target.value);
    }
    return (
        <>
            <div className="row justify-content-center my-5">
                <div className=" col-md-6 bg-secondary shadow-lg p-5 rounded-4">
                    <div className="data">
                        <h1 className='text-center text-info'>Currency Converter</h1>
                        <div className="text-center my-2">
                            <label htmlFor="amt">Amount: </label><br/>
                            <input type="number" id="amt" value={amount} onChange={changeamt} />
                        </div>
                        <div className="text-center my-2">
                            <label htmlFor="from">From Currency: </label><br/>
                            <select id="from" value={fromcurrency} onChange={changeformcurr}>
                                <option value="USD">USD - US Doller</option>
                                <option value="EUR">EUR - Euro</option>
                                <option value="GBP">GBP - British pound</option>
                                <option value="JPY">JPY - Japanise yen</option>
                                <option value="AUD">AUD - Australian Doller</option>
                                <option value="CAD">CAD - Canadian Doller</option>
                                <option value="CNY">CNY - Chinese Yuan</option>
                                <option value="INR">INR - Indian Rupee</option>
                                <option value="BRL">BRL - Brazillian Real</option>
                                <option value="ZAR">ZAR - South African Rand</option>
                            </select>
                        </div>
                        <div className="text-center my-2">
                            <label htmlFor="to">From Currency: </label><br/>
                            <select id="to" value={tocurrency} onChange={changetocurr}>
                                <option value="USD">USD - US Doller</option>
                                <option value="EUR">EUR - Euro</option>
                                <option value="GBP">GBP - British pound</option>
                                <option value="JPY">JPY - Japanise yen</option>
                                <option value="AUD">AUD - Australian Doller</option>
                                <option value="CAD">CAD - Canadian Doller</option>
                                <option value="CNY">CNY - Chinese Yuan</option>
                                <option value="INR">INR - Indian Rupee</option>
                                <option value="BRL">BRL - Brazillian Real</option>
                                <option value="ZAR">ZAR - South African Rand</option>
                            </select>
                        </div>

                        <div className="result">
                            <h2 className='text-center text-warning'>{amount} {fromcurrency} is equal to {convamt} {tocurrency}</h2>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

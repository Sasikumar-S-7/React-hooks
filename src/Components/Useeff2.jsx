import React from 'react'
import { useState, useEffect } from "react";
export const Useeff2 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
        
        return () => {
            clearTimeout(timer);
        }
    },[count]);


    return (
        <>
            <button btn></button>
            <h1>I've rendered {count} times!</h1>
        </>
    );
};

// CustomHook1.js
import React from 'react';
import { useFetch } from '../Custom Hooks/useFetch';


export const CustomHook1 = () => {
    const data = useFetch('https://jsonplaceholder.typicode.com/todos/');

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1>Custom Hook</h1>
            <ul>
                {data.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    );
};

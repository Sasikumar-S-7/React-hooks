import { useState } from 'react';

export const useCount = () => {
    const [count, setCount] = useState(0);

    const Counting = () => {
        setCount(()=>count + 1);
    };

    return [Counting, count];
};

import React, { useState, useEffect } from 'react'

// Lazy Initialization
const lazyValue = () => {
    return 'Hello';
}
export default function ReduxPractise() {
    const [a, setA] = useState(lazyValue);
    return (
        <div className="ReduxPractise">
            <h1>
                Redux Practise
            </h1>
            <h3>
                {a}
            </h3>
        </div>
    )
}




    // https://www.youtube.com/watch?v=324czHa9O9U&list=PL0CUCu7IoPKj67UX4dTWbxzaykqMgErDG&index=5&t=3643s
    // https://www.youtube.com/watch?v=6Q2B7Dv0OiQ
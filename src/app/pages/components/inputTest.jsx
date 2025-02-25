'use client'

import { useEffect, useState } from "react";

const InputTest = (props) => {
    console.log(props);
    const [inputvals, setInputVal] = useState('');
    useEffect(() => {
        console.log(inputvals);
    }, [inputvals])

    return (
        <input
            value={inputvals}
            onChange={e => {
                setInputVal(e.target.value);
            }}
            placeholder="this is input test"
        />
    );
}

export default InputTest;
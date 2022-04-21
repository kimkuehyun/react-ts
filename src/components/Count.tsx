import React, { useState } from 'react';

function Count() {
    const [count, setCount] = useState<number>(0);
    const onInc = () => setCount(count + 1);
    const onDec = () =>setCount(count - 1);

    return (
        <div>
            <h3>{count}</h3>
            <div>
                <button onClick={onInc}>+1</button>
                <button onClick={onDec}>-1</button>
            </div>
        </div>
    );
}

export default Count;
import React, { useState } from 'react';

function Count() {
    // useState를 사용하면 Generics를 사용하지 않아도 타입을 유추할 수 있다.
    const [count, setCount] = useState(0);
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
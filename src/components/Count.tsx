import React, { useReducer } from 'react';

/**
 * | 는 or을 의미한다.
 */
interface Action {
    type: 'INC' | 'DEC'
};

/**
 * 파라미터로 받는 상태 타입과 return 타입을 동일하게 해야
 * 특정 케이스에 결과값을 반환하지 않았거나, 상태의 타입이 바뀌었을 때 에러를 감지할 수 있다.
 */
function reducer(state: number, action: Action): number {
    switch(action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default:
            throw new Error("Unhandled action");
    }
}

function Count() {
    const [count, dispatch] = useReducer(reducer, 0);
    const onInc = () => dispatch({ type: 'INC' });
    const onDec = () => dispatch({ type: 'DEC' });

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
import React from 'react';

/**
 * 컴포넌트의 props중 생략해도 되는 값이 존재하면 변수 뒤에 ?를 붙여준다.
 */
interface GreetingsProps {
    name: string;
    desc: string;
    optional?: string;
};

/**
 * React.FC를 생략하면 defaultProps는 잘 동작한다.
 */
const Greetings = ({ name, desc, optional }: GreetingsProps) => {
    return (
        <div>
            {name}<br />
            {desc}<br />
            {
                optional && <p>{optional}</p>
            }
        </div>
    );
};

Greetings.defaultProps = {
    desc: "asdf"
};

export default Greetings;
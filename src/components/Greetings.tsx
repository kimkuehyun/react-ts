import React from 'react';

/**
 * 컴포넌트에서 함수를 props로 받아와야 한다면 아래와 같이 지정한다.
 */
interface GreetingsProps {
    name: string;
    desc: string;
    optional?: string;
    onClick: (name: string) => void;
};

/**
 * React.FC를 생략하면 defaultProps는 잘 동작한다.
 */
const Greetings = ({ name, desc, optional, onClick }: GreetingsProps) => {
    const handleClick = () => onClick(name);

    return (
        <div>
            {name}<br />
            {desc}<br />
            {
                optional && <p>{optional}</p>
            }
            <div>
                <button onClick={handleClick}>Button</button>
            </div>
        </div>
    );
};

Greetings.defaultProps = {
    desc: "asdf"
};

export default Greetings;
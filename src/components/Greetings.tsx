import React from 'react';

/**
 * 컴포넌트 props type을 선언할 때는 type이나 interface를 써야하며 일관성을 유지해야 한다.
 */
interface GreetingsProps {
    name: string;
    desc: string;
};

/**
 * React.FC를 생략하면 defaultProps는 잘 동작한다.
 */
const Greetings = ({ name, desc }: GreetingsProps) => {
    return (
        <div>
            {name}<br />
            {desc}
        </div>
    );
};

Greetings.defaultProps = {
    desc: "asdf"
};

export default Greetings;
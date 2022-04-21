import React, { useState } from 'react';

interface FormProps {
    onSubmit: (form: { 
        name: string;
        desc: string;
     }) => void;
};

function Form({ onSubmit }: FormProps) {
    const [form, setForm] = useState({
        name: '',
        desc: ''
    });

    const { name, desc } = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);

        // 초기화
        setForm({
            name: '',
            desc: ''
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='name' value={name} onChange={onChange} /><br />
                <input name='desc' value={desc} onChange={onChange} /><br />
                <input type='submit' value='등록' />
            </form>
        </div>
    );
}

export default Form;
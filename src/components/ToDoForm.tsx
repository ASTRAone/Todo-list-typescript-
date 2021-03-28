import React, { useState } from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

const ToDoForm: React.FC<TodoFormProps> = (props) => {

    const [value, setValue] = useState<string>('');

    // Добавление
    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            props.onAdd(value)
            setValue('');
        }
    };

    return (
        <div className="input-field mt2">
            <input 
                id="title" 
                type="text" 
                placeholder="Введите название дел"
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                onKeyPress={keyPressHandler} />
            <label htmlFor="title" className="active">
                Введите название дел
            </label>
        </div>
    );
};

export default ToDoForm;
import React from 'react'
import { ITodo } from '../interfaces';

type TodoListProps = {
    todos: ITodo[],
    onToggle(id: number): void,
    onRemove(id: number): void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {

    if (todos.length === 0) {
        return <p className="center">Пока дел нет!</p>
    }

    const removeHandler = (e: React.MouseEvent, id: number) => {
        e.preventDefault();
        
        if (onRemove) {
            onRemove(id);
        }
        
    };

    return (
        <ul>
            {todos.map((item) => {
                return (
                    <li 
                        className={`todo ${item.completed === true ? 'completed': ''}`} 
                        key={item.id} >
                        <label >
                            <input 
                                type="checkbox" 
                                checked={item.completed}
                                onChange={() => onToggle(item.id)} />
                            <span>{item.title}</span>
                            <i 
                                className="material-icons red-text"
                                onClick={(e) => removeHandler(e, item.id)}>
                                    delete
                            </i>
                        </label>
                    </li>
                )
            })}
        </ul>
    );
};

export default TodoList;
import React, { useState, useEffect } from 'react'
import ToDoForm from '../components/ToDoForm';
import TodoList from '../components/TodoList';
import { ITodo } from '../interfaces';

const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // Добавление в список
    const addHandler = (title: string) => {
        const newTodo: ITodo = {
        title: title,
        id: Date.now(),
        completed: false
        }; 

        setTodos(prev => [newTodo, ...prev])
    };

    // Выполнено/не выполнено 
    const toggleHandler = (id: number) => {
        setTodos(prev => 
        prev.map((item) => {
            if (item.id === id) {
            item.completed = !item.completed;
            }
            return item;
        })
        );
    };

    // Удаление из списка
    const removeHandler = (id: number) => {
        const shouldRemove = window.confirm('Вы уверены, что хотите удалить элемент?');

        if (shouldRemove === true) {
            setTodos(prev => prev.filter((item) => item.id !== id));
        }
    };

    return (
        <>
        <ToDoForm 
            onAdd={addHandler} 
            />
        <TodoList 
            todos={todos}
            onToggle={toggleHandler}
            onRemove={removeHandler} />
        </>
    );
};

export default TodosPage;
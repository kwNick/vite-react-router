import React from 'react'
import { useParams } from 'react-router-dom';
import { todos } from '../data.json'

const TodoItem = () => {
    const { slug } = useParams();
    const todo = todos.find((x) => x.slug == slug);
    return (
        <div>
            <h1>TodoItem</h1>
            <p>{todo.id}</p>
            <p>{todo.slug}</p>
            <p>{todo.todo}</p>
        </div>
    )
}

export default TodoItem
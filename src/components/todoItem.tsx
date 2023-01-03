import React from 'react';
import 'css/todoList.css';

export default function TodoItem({todo}: any) {
    const {id, title, body} = todo;
    return (
        <li className="todo-item">
            <h4 className='todo-item__title'>{todo.title}</h4>
            <p className="todo-item__body">{todo.body}</p>
            <button className="todo-item__btn">
                <i className="fa-solid fa-circle-minus"></i>
            </button>
        </li>
    )
}
import React from 'react';
import 'css/todoList.css';
import { Todo } from 'AppLayout';

type Props = {
    todo: Todo;
    onRemove: (id: number) => void;
}

export default function TodoItem(props: Props) {
    const {id, title, body} = props.todo;
    return (
        <li className="todo-item">
            <h4 className='todo-item__title'>{title}</h4>
            <p className="todo-item__body">{body}</p>
            <button className="todo-item__btn" onClick={() => props.onRemove(id)}>
                <i className="fa-solid fa-circle-minus"></i>
            </button>
        </li>
    )
}
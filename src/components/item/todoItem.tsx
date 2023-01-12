import React from 'react';
import 'css/todoList.css';
import { Todo } from 'AppLayout';
import cn from 'classnames';

type Props = {
    todo: Todo;
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;
}

export default function TodoItem(props: Props) {
    const {id, title, body, checked} = props.todo;
    return (
        <li className="todo-item">
            <h4 className={cn('todo-item__title', {checked})}>{title}</h4>
            <p className={cn('todo-item__body', {checked})}>{body}</p>
            <div className="todo-item__btns">
                <button className={cn('todo-item__check', {checked})} onClick={() => props.onToggle(id)}>
                    {checked ? <i className="fa-solid fa-circle-check"></i> : <i className="fa-regular fa-circle-check"></i>}
                </button>
                <button className="todo-item__remove" onClick={() => props.onRemove(id)}>
                    <i className="fa-solid fa-circle-minus"></i>
                </button>
            </div>
        </li>
    )
}
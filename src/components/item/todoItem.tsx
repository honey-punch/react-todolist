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
    // 넘겨 받은 todo 객체를 구조분해할당으로 변수에 담음
    const {id, title, body, checked} = props.todo;

    return (
        <li className="todo-item">
            <h4 className={cn('todo-item__title', {checked})}>{title}</h4>
            <p className={cn('todo-item__body', {checked})}>{body}</p>
            <div className="todo-item__btns">
                {/* onToggle함수를 통해 클릭된 todo객체의 checked 상태 변경, checked 상태에 따른 클래스 추가 */}
                <button className={cn('todo-item__check', {checked})} onClick={() => props.onToggle(id)}>
                    {checked ? <i className="fa-solid fa-circle-check"></i> : <i className="fa-regular fa-circle-check"></i>}
                </button>
                <button
                    className="todo-item__remove"
                    onClick={() => {
                        props.onRemove(id)
                        alert('리스트를 삭제했습니다.')
                    }}>
                    <i className="fa-solid fa-circle-minus"></i>
                </button>
            </div>
        </li>
    )
}
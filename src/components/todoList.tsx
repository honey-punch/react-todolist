import React, { ReactNode } from 'react';
import 'css/todoList.css';
import TodoItem from 'components/todoItem';
import {Todo} from 'AppLayout';

type Props = {
    todos: Array<Todo>;
}

export default function TodoList(props: Props) {
    return (
        <ul className='todo-list'>
            {
                props.todos.map(
                    (todo: any) => (<TodoItem
                                        todo={todo}
                                        key={todo.id}
                                        />)
                )
            }
        </ul>
    )
}
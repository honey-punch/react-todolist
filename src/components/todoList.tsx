import React, { ReactNode } from 'react';
import 'css/todoList.css';
import TodoItem from 'components/item/todoItem';
import {Todo} from 'AppLayout';

type Props = {
    todos: Array<Todo>;
    onRemove: (id: number) => void; 
}

export default function TodoList(props: Props) {
    return (
        <ul className='todo-list'>
            {
                props.todos.map(
                    (todo: Todo) => (<TodoItem
                                        todo={todo}
                                        key={todo.id}
                                        onRemove={props.onRemove}
                                        />)
                )
            }
        </ul>
    )
}
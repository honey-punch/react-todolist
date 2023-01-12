import React, { Children, ReactEventHandler, useRef, useState } from 'react';
import Header from 'components/header';
import TodoList from 'components/todoList';
import Dialog from 'components/dialog';

export type Todo = {
    id: number;
    title: string;
    body: string;
    checked: boolean;
}

export function AppLayout() {
    const [todos, setTodos] = useState(Array<Todo>)
    const [values, setValue] = useState({
        title: '',
        body: '',
    });
    //const {title, body} = values;

    const onChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {value, name} = e.target;
        setValue({
            ...values,
            [name]: value
        });
    });

    const nextId = useRef(1);

    const onInsert = (title: string, body: string) => {
        const todo: Todo = {
            id: nextId.current,
            title: title,
            body: body,
            checked: false,
        }
        setTodos(todos.concat(todo));
        nextId.current++;
    }
    const onSubmit = ((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onInsert(values.title, values.body);
        setValue({
            title: '',
            body: '',
        });
        setDialogState(false);
    })

    const onRemove = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const onToggle = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, checked: !todo.checked}: todo))
    }

    const [dialogState, setDialogState] = useState(false);
    const toggleDialog = () => {
        setDialogState(!dialogState);
    }
    const closeDialog = () => {
        setDialogState(false);
    }

    return (
        <div className="app-layout">
            <Header toggleDialog={toggleDialog}></Header>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
            {dialogState && <Dialog
                                values={values}
                                onSubmit={onSubmit}
                                onChange={onChange}
                                closeDialog={closeDialog}
                            ></Dialog>}
        </div>
    )
}
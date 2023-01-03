import React, { Children, ReactEventHandler, useState } from 'react';
import Header from 'components/header';
import TodoList from 'components/todoList';
import Dialog from 'components/dialog';

export type Todo = {
    id: number;
    title: string;
    body: string;
}

export function AppLayout() {
    const [todos, setTodos] = useState(Array<Todo>)

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTodos(todos => [...todos,
                {
                    id: 1,
                    title: 'title',
                    body: 'body'
                }
            ]
        )

        setDialogState(false);
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
            <TodoList todos={todos}></TodoList>
            {dialogState && <Dialog
                                onSubmit={onSubmit}
                                closeDialog={closeDialog}
                            ></Dialog>}
        </div>
    )
}
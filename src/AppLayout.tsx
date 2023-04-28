import React, { useState, useRef } from 'react';
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
    // dialog input의 name, value속성을 가져와 업데이트 하기위한 state
    const [values, setValues] = useState({
        title: '',
        body: '',
    });

    // dialog의 input태그에 입력되는 텍스트에 따라 values state를 업데이트하는 함수
    const onChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        // dialog의 e.target(input태그)의 value, name 속성을 가져와서 values 업데이트
        const {value, name} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    });

    // todo가 추가될때마다 고유한 id값을 배열의 index처럼 넣기 위한 변수
    const nextId = useRef(0);

    // dialog의 input태그에 입력되는 값으로 todo 객체 생성후 todos에 추가하는 함수
    const onInsert = (title: string, body: string) => {
        const todo: Todo = {
            id: nextId.current,
            title: title,
            body: body,
            checked: false,
        }
        // state는 불변성을 유지하기 때문에 push대신 concat사용
        setTodos(todos.concat(todo));
        nextId.current += 1
    }

    const onSubmit = ((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // onChange로 업데이트된 values의 title, body로 todo객체 생성 후 todos에 추가
        onInsert(values.title, values.body);
        // dialog에 입력된 value 초기화
        setValues({
            title: '',
            body: '',
        });
        setDialogState(false);
    })

    // todoitem으로 전달해 todoitem을 클릭했을 때 해당 todo객체의 id값을 받아와 그 id를 제외한 것만 filter하는 함수
    const onRemove = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    // todoitem으로 전달해 todoitem을 클릭했을 때 해당 todo객체의 id값을 받아와 checked의 상태를 바꿔주는 함수
    const onToggle = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, checked: !todo.checked} : todo));
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
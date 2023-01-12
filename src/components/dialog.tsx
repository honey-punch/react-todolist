import React, { useCallback, useState } from 'react';
import 'css/dialog.css';

type Props = {
    values: {title: string, body: string};
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    closeDialog: () => void;
}

export default function Dialog(props: Props) {
    return (
        <form className='dialog' onSubmit={props.onSubmit}>
            <h2 className='dialog__head'>New List</h2>
            
            <h3 className='dialog__title'>제목</h3>
            <input
                type="text"
                placeholder='제목을 입력하세요.'
                value={props.values.title}
                name='title'
                onChange={props.onChange}
                />
            
            <h3 className='dialog__body'>내용</h3>
            <input
                type="text"
                placeholder='내용을 입력하세요.'
                value={props.values.body}
                name='body'
                onChange={props.onChange}
                />
            
            <button className='dialog__add-btn dialog__btn' type='submit'>추가</button>
            <button className='dialog__close-btn dialog__btn' onClick={props.closeDialog} type='button'>닫기</button>
        </form>
    )
}
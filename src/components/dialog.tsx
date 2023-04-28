import React from 'react';
import 'css/dialog.css';

type Props = {
    values: {title: string, body: string};
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    closeDialog: () => void;
}

export default function Dialog(props: Props) {
    return (
        // 밑에서 onChange함수로 업데이트된 value를 가지고 todo객체를 만들어 todos배열에 추가하는 onSubmit함수 실행
        <form className='dialog' onSubmit={props.onSubmit}>
            <h2 className='dialog__head'>New List</h2>
            
            <h3 className='dialog__title'>제목</h3>
            <input
                type="text"
                placeholder='제목을 입력하세요.'
                // onChange함수로 iuput에 입력되는 테스트로 values를 업데이트하고 밑에 value에 전달
                onChange={props.onChange}
                name='title'
                value={props.values.title}
            />
            
            <h3 className='dialog__body'>내용</h3>
            <input
                type="text"
                placeholder='내용을 입력하세요.'
                // onChange함수로 iuput에 입력되는 테스트로 values를 업데이트하고 밑에 value에 전달
                onChange={props.onChange}
                name='body'
                value={props.values.body}
            />
            
            <button className='dialog__add-btn dialog__btn' type='submit'>추가</button>
            <button className='dialog__close-btn dialog__btn' onClick={props.closeDialog} type='button'>닫기</button>
        </form>
    )
}
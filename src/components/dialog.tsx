import React, { useCallback, useState } from 'react';
import 'css/dialog.css';

type Props = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    closeDialog: () => void;
}

export default function Dialog(props: Props) {
    const [value, setValue] = useState('');
    const onChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    });

    return (
        <form className='dialog' onSubmit={props.onSubmit}>
            <h2 className='dialog__head'>New To do!</h2>
            
            <h3 className='dialog__title'>To do title</h3>
            <input
                type="text"
                placeholder='type title'

                />
            
            <h3 className='dialog__body'>To do body</h3>
            <input
                type="text"
                placeholder='type body'

                />
            
            <button className='dialog__add-btn dialog__btn' type='submit'>Add</button>
            <button className='dialog__close-btn dialog__btn' onClick={props.closeDialog} type='button'>Close</button>
        </form>
    )
}
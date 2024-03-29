import 'css/header.css';

type Props = {
    toggleDialog: () => void;
}

export default function Header(props: Props) {
    return (
        <header className='header'>
            <h1 className='header__logo'><img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo" /></h1>
            <button className='header__btn' onClick={props.toggleDialog} type='button'>
                <i className="fa-solid fa-circle-plus"></i>
            </button>
        </header>
    )
}
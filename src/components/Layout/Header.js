import classes from './Header.module.css'
import pizza from '../../assets/pizza7.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Food Order App</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={pizza} alt="Pizza" />
            </div>
        </>
    )
}

export default Header;
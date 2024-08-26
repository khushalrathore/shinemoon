import styles from './Header.module.css'
import { listItems } from '../../data.jsx'

const Header = () => {
    return (
        <header className={ styles.headerDiv }>
            <span className={ styles.logo }><a href='/'>ShineMoon</a></span>
            <nav className={ styles.navBar }>
                <ul className={ styles.navBarUl }>
                    { listItems.map( ( item, index ) => <li className={ styles.navBarUlItem } key={ index }><a className={ styles.navBarUlItemLink } href={ item.link }>{ item.title }</a></li> ) }

                </ul>
            </nav>
            <nav className={ styles.navBar }>
                <ul className={ styles.navBarUl }>
                    <li className={ styles.navBarUlItem }>
                        <a className={ styles.navBarUlItemLink_C } href="/contact-us">Contact Us</a>
                    </li>
                </ul>
                <div className={ styles.loginBtn } style={ { marginLeft: `1rem` } } title='Coming Soon'>
                    <span className={ styles.loginBtnSpan }>+</span> Log In</div>

            </nav>
        </header >
    )
}

export default Header
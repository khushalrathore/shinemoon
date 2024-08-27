import { primaryNav, secondaryNav, projectName } from './headerData';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={ `${ styles.headerDiv } ${ styles.flex_sb_c }` } >

            <a href='/' aria-label={ `${ projectName }` }>
                <span className={ `${ styles.logo } ${ styles.grd_txt }` }>{ projectName }</span>
            </a>

            <nav className={ `${ styles.flex_sb_c }` }>
                <ul className={ ` ${ styles.flex_sb_c }` }>
                    { primaryNav.map( ( item, index ) =>
                        <li className={ `${ styles.navBarUlItem } ${ styles.grd_bg_hover }` } key={ index }>
                            <a href={ item.link } aria-label={ `${ item.title }` } >
                                <span>{ item.title }</span>
                            </a>
                        </li> )
                    }
                </ul>
            </nav>

            <nav className={ `${ styles.flex_sb_c }` }>
                <ul className={ ` ${ styles.flex_sb_c }` }>
                    { secondaryNav.map( ( item, index ) =>
                        <li className={ `${ styles.navBarUlItem }` } key={ index }>
                            <a href={ item.link } aria-label={ `${ item.title }` }>
                                <span>{ item.title }</span>
                            </a>
                        </li> )
                    }
                </ul>
                <a href='/' aria-label="Login" className={ `${ styles.loginBtn } ${ styles.flex_sb_c }` } title='Coming Soon'>
                    <span className={ styles.loginBtnSpan }>+</span>
                    <span>Log in</span>
                </a>
            </nav>

        </header >
    )
};
export default Header;
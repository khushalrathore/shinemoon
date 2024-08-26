import React, { useEffect } from 'react';
import { footerItems } from './footerData';
import styles from './Footer.module.css';

import formImg from "../../assets/images/hero/hero.jpg";
import heroImg from "../../assets/images/hero/form.jpg"

function Footer () {
  const date = new Date().getFullYear();
  return (
    <footer className={ styles.footerMain }>

      <div className={ styles.footerMainDiv1 }><a href='/'>ShineMoon</a></div>

      <div className={ styles.footerMainDiv2 }>
        <div className={ styles.footerCard } style={ { backgroundImage: `url(${ formImg })` } }></div>

        <>
          {
            footerItems.map( ( item, index ) =>
              <ul key={ index } className={ styles.list }>{ item.title }
                {
                  item.listElements.map( ( item, index ) =>

                    <li key={ index } style={ { position: 'relative' } } className={ styles.listElem }>
                      <a style={ { position: `absolute`, inset: `0`, zIndex: `1` } } href={ item.link } aria-label='View More'></a>
                      { item.title }
                    </li>
                  )
                }
              </ul>
            )
          }

        </>

      </div>

      <div className={ styles.footerMainDiv3 }>

        <div>

          <span style={ { fontFamily: `system-ui`, marginInline: `3px`, fontSize: `18px` } }>
            &copy;
          </span>

          { date }

          <a href='/' aria-label='ShineMoon'>
            shinemoon.in
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;

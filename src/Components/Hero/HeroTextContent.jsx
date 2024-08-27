import { heroTextContent } from './heroData.jsx';

import styles from "./Hero.module.css"

const HeroTextContent = () => {
    return (
        heroTextContent.map( ( item, index ) =>
            <div key={ index } className={ styles.heroTextContent }>
                <span className={ styles.heroTextTagline }>{ item.tagline }</span>
                <h1 className={ styles.heroTextTitle }>{ item.title }</h1>
                <p className={ styles.heroTextDesc }>{ item.desc }</p>
                <a href='/courses' aria-label='Learn More' className={ styles.heroTextLink }>{ item.label }</a>
            </div>
        )
    )
}

export default HeroTextContent
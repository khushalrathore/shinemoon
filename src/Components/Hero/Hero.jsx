import { heroCards } from './heroData.jsx';

import HeroTextContent from './HeroTextContent.jsx';
import Explore from '../Explore/Explore.jsx';
import Reviews from '../Reviews/Reviews.jsx';
import Form from '../Form/Form.jsx';
import Marquee from '../Marquee/Marquee.jsx';


import styles from './Hero.module.css';
import heroImg from "../../assets/images/hero/form.jpg"


const Hero = () => {

    return (
        <div className={ styles.heroDiv }>
            <Marquee />
            <div className={ styles.l1 }>
                <HeroTextContent />
                < Explore />
            </div>

            <div className={ styles.l2 }>
                <div className={ styles.form_and_reviews } style={ { background: `url(${ heroImg })` } }>
                    { <Reviews /> }
                    { <Form /> }
                </div>

                <div className={ styles.heroCards }>
                    {
                        heroCards.map( ( item, index ) => <div key={ index } className={ styles.heroCardWrapper }>
                            <div className={ styles.bgLayer } style={ { background: `url(${ heroImg })` } }></div>
                            <span className={ styles.heroCardText }>{ item.title }</span>
                            <a className={ styles.takeMeThere } aria-label='Learn More' href={ item.link }></a>
                        </div> )
                    }
                </div>

            </div>
        </div >
    )
}

export default Hero;

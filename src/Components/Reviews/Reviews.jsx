
import { getSocialLink, reviewsList } from './reviewsData.jsx'

import styles from './Reviews.module.css'

const Reviews = () => {
    return (
        <div className={ styles.reviewsDiv }>
            <ul className={ styles.reviewsUl }>
                {
                    reviewsList.map( ( item, index ) => ( <li key={ index } className={ styles.reviewsUlItem }>
                        <div className={ styles.reviewTop }>
                            <a href={ getSocialLink( item.handle ) } aria-label='See Profile'>@{ item.name.replace( / /g, '_' ) }</a>
                            <a href={ getSocialLink( item.handle ) } aria-label='See Profile'>#{ item.handle }</a>
                        </div>
                        <div className={ styles.reviewMid }>
                            <img src={ item.image } alt={ item.name.replace( / /g, '_' ) } />
                            <span>{ item.review }</span>
                        </div>
                        <div className={ styles.reviewBottom }>
                            <a href={ item.link } aria-label='See More'>view full</a>
                            <a href={ item.link } aria-label='Learn More' className={ styles.takeMeThere }></a>
                        </div>
                    </li> ) )
                }
            </ul>
        </div>
    )
}

export default Reviews;

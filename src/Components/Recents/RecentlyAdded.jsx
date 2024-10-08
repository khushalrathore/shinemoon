import { recentsData, scrollDown, getRandomPair } from './recentsData';
import styles from './RecentlyAdded.module.css';

const RecentlyAdded = () => {

    return (
        <div className={ styles.recentsDiv } onClick={ scrollDown } style={ { position: `relative` } }>
            {/* <a style={ { position: `absolute`, inset: 0, zIndex: 1 } } aria-label='Recents' href='#recents'></a> */ }
            <details>
                <summary>
                    <div>
                        <h1 className={ styles.recentsHeading }>Recently Added</h1>
                        <sub style={ { fontSize: '1.25rem' } }>Courses, YT Videos & More</sub>
                    </div>
                </summary>

                <div className={ styles.recentsLibrary } id="recents">
                    { recentsData.slice( 0, 4 ).map( ( item, index ) => {
                        const randomPair = getRandomPair(); // Get a random pair for each item
                        return (
                            <div

                                key={ index }
                                className={ styles.card }
                                style={ {
                                    backgroundImage: `linear-gradient(${ randomPair.light }, ${ randomPair.dark })`,
                                    backgroundSize: '200%',
                                } }
                                title={ item.description }
                                onClick={ () => ( window.location.href = item.link ) }
                            >
                                <div className={ styles.cardSticker }>#{ index + 1 }</div>
                                <span className={ styles.cardHeading } title={ item.description }>
                                    { item.description.length > 27
                                        ? `${ item.description.substring( 0, 25 ) }...`
                                        : item.description }
                                </span>
                                <div className={ styles.textOfCard }>
                                    <a
                                        href={ item.link }
                                        aria-label='Learn More'
                                        className={ styles.cardViews }
                                        title={ item.description }
                                        style={ { backgroundSize: '200%' } }
                                    >
                                        Take Me There
                                    </a>
                                    <span className={ styles.cardTime } style={ { backgroundSize: '200%' } }>
                                        #{ item.handle }
                                    </span>
                                </div>
                            </div>
                        );
                    } ) }
                </div>
            </details>
        </div>
    );

};

export default RecentlyAdded;

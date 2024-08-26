import React, { useState } from 'react';
import styles from './Showcase.module.css';
import a from '../../assets/videos/a.mp4';
import b from '../../assets/videos/b.mp4';
import c from '../../assets/videos/c.mp4';
import { top_things, showcase_side, shuffleArray } from '../../data';

const Showcase = () => {
    const creatorIcon = "https://art.ngfiles.com/images/2947000/2947278_mihar34_pfp.png?f1672060785";
    const [ currentVideoIndex, setCurrentVideoIndex ] = useState( 2 );
    const [ transitioning, setTransitioning ] = useState( false );
    const [ currentShowcaseIndex, setCurrentShowcaseIndex ] = useState( 0 );
    const videos = [ a, b, c ];
    // const videos = shuffleArray( video )
    const handleVideoChange = ( e ) => {
        setTransitioning( true );
        setTimeout( () => {
            if ( e.target.id === 'prev' ) {
                setCurrentVideoIndex( ( prevIndex ) =>
                    prevIndex === 0 ? videos.length - 1 : prevIndex - 1
                );
            } else if ( e.target.id === 'next' ) {
                setCurrentVideoIndex( ( prevIndex ) =>
                    prevIndex === videos.length - 1 ? 0 : prevIndex + 1
                );
            }
            setTransitioning( false );
        }, 1000 ); // Match this time with your CSS transition duration
    };

    const handleShowcaseChange = ( direction ) => {
        setCurrentShowcaseIndex( ( prevIndex ) => {
            if ( direction === 'prev' ) {
                return prevIndex === 0 ? showcase_side.length - 1 : prevIndex - 1;
            } else if ( direction === 'next' ) {
                return prevIndex === showcase_side.length - 1 ? 0 : prevIndex + 1;
            }
            return prevIndex;
        } );
    };

    return (
        <div className={ styles.showcaseDiv } id="happening">
            <div className={ styles.vDiv1 }>
                <span>TOP<br></br>CREATORS : </span>
                <div className={ styles.vDiv1_icon } style={ { backgroundImage: `url(${ creatorIcon })` } }></div>
                <div className={ styles.vDiv1_joinUs } onClick={ () => window.location.href = '#happening' }>
                    <p style={ { position: `relative` } }>
                        <a style={ { position: `absolute`, inset: 0, zIndex: 2 } } href='https://www.instagram.com/ig_shinemoon/' target='_blank' aria-label='Join Us'></a>
                        <span>JOIN US</span>

                    </p>
                </div>
            </div>

            <div className={ styles.vDiv2 }>
                <div className={ styles.vDiv2_top }>
                    <div className={ styles.top_things }>
                        { top_things.map( ( item, index ) => (
                            <span key={ index }>
                                <em>( </em>
                                { item.num }
                                <sup>{ item.type }</sup>
                                <em> )</em>
                            </span>
                        ) ) }
                    </div>
                    <div className={ styles.top_text }>
                        <span><strong>dive</strong> into the</span>
                        <span>World <strong>Of</strong></span>
                    </div>
                </div>
                <div className={ styles.vDiv2_mid }>
                    <div className={ styles.midArrowLeft } id='prev' onClick={ handleVideoChange }></div>
                    <div className={ `${ styles.videoContainer } ${ transitioning ? styles.fadeOut : styles.fadeIn }` }>
                        <video className={ styles.videoPlayer } autoPlay={ true } muted={ true } loop={ true } key={ currentVideoIndex }>
                            <source src={ videos[ currentVideoIndex ] } type="video/mp4" />
                        </video>
                    </div>
                    <div className={ styles.midArrowRight } id='next' onClick={ handleVideoChange }></div>
                </div>
                <div className={ styles.vDiv2_bottom }>
                    <div className={ styles.bottom_text }>
                        <span>video <strong>editing</strong> &</span>
                        <span><strong>Cinema</strong>tography</span>
                    </div>
                </div>
            </div>

            <div className={ styles.vDiv3 }>
                <div className={ styles.vDiv3_1 }>
                    <div onClick={ () => handleShowcaseChange( 'prev' ) }>{ `<` }</div>
                    <div onClick={ () => handleShowcaseChange( 'next' ) }>{ `>` }</div>
                </div>
                <div className={ styles.showcaseSide } onClick={ () => window.location.href = `${ showcase_side[ currentShowcaseIndex ].link }` }>
                    <div className={ styles.vDiv3_2 } style={ { backgroundImage: `url(${ showcase_side[ currentShowcaseIndex ].image })` } }>
                    </div>
                    <div className={ styles.vDiv3_3 } title={ showcase_side[ currentShowcaseIndex ].name }>
                        { showcase_side[ currentShowcaseIndex ].name.substring( 0, 14 ) + "..." }
                    </div>
                    <div className={ styles.vDiv3_4 } title={ showcase_side[ currentShowcaseIndex ].info }>
                        { showcase_side[ currentShowcaseIndex ].info.substring( 0, 28 ) + "..." }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showcase;

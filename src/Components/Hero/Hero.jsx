import { useState } from 'react';
import { exploreTags, formTopicsList, reviewsList, fb, ig, tw, yt } from './heroData.jsx';
import styles from './Hero.module.css';

import formImg from "../../assets/images/hero/hero.jpg";
import heroImg from "../../assets/images/hero/form.jpg"

const Hero = () => {
    const [ tags, setTags ] = useState( [] );
    const [ result, setResult ] = useState( "" );
    const [ hoveredIndex, setHoveredIndex ] = useState( null );
    const handleTagSelection = ( tag ) => {
        setTags( prevTags => {
            if ( prevTags.includes( tag ) ) {
                return prevTags.filter( t => t !== tag ); // Deselect the tag if already selected
            } else {
                return [ ...prevTags, tag ]; // Add the tag if not already selected
            }
        } );
    };

    const onSubmit = async ( event ) => {
        event.preventDefault();
        setResult( "Sending...." );
        const formData = new FormData( event.target );

        formData.append( "access_key", "c4c25a46-d710-492d-9f79-54e3a2b3ffe4" );

        const response = await fetch( "https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        } );

        const data = await response.json();

        if ( data.success ) {
            setResult( "Done" );
            event.target.reset();
            setTags( [] );
        }
        console.log( "" );
    };

    return (
        <div className={ styles.heroDiv }>
            <div className={ styles.marquee }>ShineMoon</div>
            <div className={ styles.l1 }>
                <div className={ styles.hDiv1 }>
                    <span>dekhoo jaa ke</span>
                    <h1>Simplest Way To Learn</h1>
                    <p>Ye course pakka se video editor bana dega jada socho mat lelo or kuch sikh lo, kuki syd ye paise vase bhi cigrattee me udaa doge isse acha kuch use lelo. Padhayi to kr li jitni krni thi apni skill pe focus kr ke aage baddo or professional ban jaooooooooo</p>
                    <a href='/courses' aria-label='Learn More'>Check Now</a>
                </div>
                <div className={ styles.circleBar } onClick={ () => window.location.href = '#happening' }>
                    <div className={ styles.Arrow }>
                    </div>
                </div>
                <div className={ styles.l2_hdiv1 }>
                    <span>Explore what's happening <strong>@shinemoon</strong></span>
                    <ul>
                        {
                            exploreTags.map( ( item, index ) => (
                                <li key={ index }>
                                    <a
                                        className={ styles.exploreTag }
                                        aria-label='Explore Tags'
                                        href={ item.link }
                                        key={ index }
                                        onMouseEnter={ () => setHoveredIndex( index ) }
                                        onMouseLeave={ () => setHoveredIndex( null ) }
                                        style={ {
                                            borderColor: item.text !== "View All" ? item.color : "transparent",
                                            textDecoration: item.text !== "View All" ? "unset" : "underline",
                                            fontWeight: item.text !== "View All" ? "unset" : "bolder",
                                            backgroundColor: hoveredIndex === index ? item.color : 'transparent',
                                            color: hoveredIndex === index ? "#fff" : item.color
                                        } }
                                    >
                                        { item.text }
                                    </a>
                                </li>
                            ) )
                        }
                    </ul>
                </div>

            </div>
            <div className={ styles.l2 }>

                <div className={ styles.hDiv2 } style={ { background: `url(${ heroImg })` } }>
                    {/* <div className={ styles.glassLayer }></div> */ }
                    <div className={ styles.reviewsDiv }>
                        <ul>
                            { reviewsList.map( ( item, index ) => {
                                let socialLink = '';

                                switch ( item.handle ) {
                                    case 'facebook':
                                        socialLink = fb;
                                        break;
                                    case 'instagram':
                                        socialLink = ig;
                                        break;
                                    case 'youtube':
                                        socialLink = yt;
                                        break;
                                    case 'twitter':
                                        socialLink = tw;
                                        break;
                                    default:
                                        socialLink = '#'; // Fallback link if handle doesn't match any case
                                        break;
                                }

                                return (
                                    <li key={ index }>
                                        <div className={ styles.reviewTop }>
                                            <a href={ socialLink } aria-label='See Profile' >@{ item.name }</a>
                                            <a href={ socialLink } aria-label='See Profile'>#{ item.handle }</a>
                                        </div>
                                        <div className={ styles.reviewMid }>
                                            <img src={ item.image } alt={ item.name } />
                                            <span>{ item.review }</span>
                                        </div>
                                        <div className={ styles.reviewBottom }>
                                            <a href={ item.link } aria-label='See More'>view full</a>
                                            <a href={ item.link } aria-label='Learn More' className={ styles.takeMeThere }></a>
                                        </div>
                                    </li>
                                );
                            } ) }
                        </ul>
                    </div>

                    <div className={ styles.formDiv }>
                        <form onSubmit={ onSubmit }>
                            {/* <div className={ styles.formLogo }>ShineMoon</div> */ }
                            <div className={ styles.formBanner } style={ { background: `url(${ formImg })` } }></div>
                            <div className={ styles.formTopics }>
                                <ul>
                                    { formTopicsList.map( ( item, index ) => (
                                        <li
                                            key={ index }
                                            onClick={ () => handleTagSelection( item ) }
                                            className={ `${ styles.formTopicItem } ${ tags.includes( item ) ? styles.active : '' }` }
                                        >
                                            { item }
                                        </li>
                                    ) ) }
                                </ul>
                            </div>
                            <div className={ styles.mailWrapper }>
                                <input className={ styles.email } type="email" name="email" id="email" placeholder={ 'example@mail.com' } autoComplete={ 'email webauthn' } required={ true } />
                            </div>
                            <div className={ styles.msgWrapper }>
                                <textarea required={ true } spellCheck={ "true" } name="message" id="message" className={ styles.messageBox } placeholder='Write something...'></textarea>
                            </div>

                            <textarea
                                name="tags"
                                id="tags"
                                className={ styles.messageBox2 }
                                placeholder='Tags (Optional) : '
                                value={ tags.join( ", " ) }
                                readOnly
                            />
                            <input className={ styles.submitButton } type="submit" value={ result || "Send" } />
                        </form>
                    </div>
                </div>
                <div className={ styles.l2_hdiv2 }>
                    <div className={ styles.l2_hdiv2_images }>
                        <div className={ styles.bgLayer } style={ { background: `url(${ heroImg })` } }></div>
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                        <a aria-label='Learn More' className={ styles.takeMeThere } href='#'></a>
                    </div>
                    <div className={ styles.l2_hdiv2_images }>
                        <div className={ styles.bgLayer2 } style={ { background: `url(${ heroImg })` } }></div>
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                        <a aria-label='Learn More' className={ styles.takeMeThere } href='#'></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero;

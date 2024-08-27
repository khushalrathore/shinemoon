import { useState } from 'react';
import { formTopicsList } from './formData';

import formImg from "../../assets/images/hero/hero.jpg";
import styles from "./Form.module.css"

const Form = () => {
    const [ tags, setTags ] = useState( [] );
    const [ isSubmitting, setIsSubmitting ] = useState( false );
    const [ result, setResult ] = useState( "" );

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
        setIsSubmitting( true ); // Set the state to true when the form is being submitted
        setResult( "Sending...." );

        const formData = new FormData( event.target );
        formData.append( "access_key", import.meta.env.VITE_FORM );

        const message = formData.get( "message" ).trim(); // Get and trim the message input

        // Check if the message is not empty
        if ( message === "" ) {
            setResult( "Invalid Message" ); // Show an error message
            setIsSubmitting( false );
            return; // Exit the function if the message is invalid
        }

        const response = await fetch( "https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        } );

        const data = await response.json();

        if ( data.success ) {
            setResult( "Done" );
            event.target.reset();
            setTags( [] );
        } else {
            setResult( "Network Error !!!" );
            event.target.reset();
            setTags( [] );
        }
        setIsSubmitting( false ); // Set the state back to false when the submission is complete
    };

    return (
        <div className={ styles.formDiv }>
            <form onSubmit={ onSubmit }>
                <div className={ styles.formBanner } style={ { background: `url(${ formImg })` } }></div>
                <div className={ styles.formTopics }>
                    <ul>
                        { formTopicsList.map( ( item, index ) => (
                            <li key={ index } onClick={ () => handleTagSelection( item ) } className={ `${ styles.formTopicItem } ${ tags.includes( item ) ? styles.active : '' }` } >
                                <span>{ item }</span>
                            </li> ) )
                        }
                    </ul>
                </div>
                <div className={ styles.mailWrapper }>
                    <input className={ styles.email } type="email" name="email" id="email" placeholder={ 'example@mail.com' } autoComplete={ 'email webauthn' } required={ true } />
                </div>
                <div className={ styles.msgWrapper }>
                    <textarea required={ true } spellCheck={ "true" } name="message" id="message" className={ styles.messageBox } placeholder='Write something...'></textarea>
                </div>

                <textarea name="tags" id="tags" className={ styles.messageBox2 } placeholder='Tags (Optional) : ' value={ tags.join( ", " ) } readOnly />
                <input className={ `${ styles.submitButton } ${ isSubmitting ? styles.grd_bg : "" }` } type="submit" value={ result || "Send" } />
            </form>
        </div>
    )
}

export default Form
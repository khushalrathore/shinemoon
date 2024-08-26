import React from 'react'
import styles from "./Youtube.module.css"
import VideoCard from './Card/VideoCard'
import { videoLibraryList } from '../../data'

const Youtube = () => {

    return (
        <div className={ styles.ytDiv } >
            <div className={ styles.bgWrapper }></div>

            <details>
                <summary>
                    <h1 className={ styles.recentsHeading }>YouTube</h1><sub style={ { color: `white`, fontSize: `1.25rem` } }>What's Poppin'</sub>
                </summary>
                <div className={ styles.videoLibrary } id="youtube">
                    {
                        videoLibraryList.slice( 0, 3 ).map( ( item, index ) => <VideoCard key={ index } videoUrl={ item.video } index={ index } /> )
                    }
                </div>
            </details>

        </div>
    )
}

export default Youtube
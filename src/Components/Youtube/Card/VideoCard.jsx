import React, { useState, useEffect } from 'react';
import { colors, colorPair, formatViewCount } from '../youtubeData';
import styles from './VideoCard.module.css';

const VideoCard = ( { videoUrl, index } ) => {
    const [ videoData, setVideoData ] = useState( null );
    const apiKey = import.meta.env.VITE_YT;
    const videoId = videoUrl.split( 'v=' )[ 1 ].split( '&' )[ 0 ];
    const cacheKey = `videoData-${ videoId }`;

    useEffect( () => {
        // Check if data is in local storage
        const cachedData = localStorage.getItem( cacheKey );
        if ( cachedData ) {
            setVideoData( JSON.parse( cachedData ) );
        } else {
            // Fetch data if not in local storage
            const apiEndpoint = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${ videoId }&key=${ apiKey }`;

            fetch( apiEndpoint )
                .then( response => response.json() )
                .then( data => {
                    if ( data.items && data.items.length > 0 ) {
                        const videoDetails = data.items[ 0 ];
                        const formattedData = {
                            title: videoDetails.snippet.title,
                            publishedDate: videoDetails.snippet.publishedAt,
                            viewCount: formatViewCount( videoDetails.statistics.viewCount ),
                            thumbnailUrl: videoDetails.snippet.thumbnails.high.url,
                        };
                        setVideoData( formattedData );
                        localStorage.setItem( cacheKey, JSON.stringify( formattedData ) ); // Cache data
                    } else {
                        console.log( 'Video not found.' );
                    }
                } )
                .catch( error => {
                    console.error( 'Error fetching video details:', error );
                } );
        }
    }, [ videoUrl, videoId, apiKey, cacheKey ] );

    if ( !videoData ) {
        return (
            <div style={ { backgroundImage: `var(--bg-grd2)`, WebkitBackgroundClip: `text`, backgroundClip: `text`, WebkitTextFillColor: `transparent` } }>
                Loading...
            </div>
        );
    };

    return (
        <div
            className={ styles.card }
            style={ { background: `url(${ videoData.thumbnailUrl })`, backgroundSize: `cover`, backgroundPosition: `top -40px center` } }
            title={ videoData.title }
            onClick={ () => window.open( videoUrl, '_blank' ) }
        >
            <div className={ styles.cardSticker }>#{ index + 1 }</div>
            <h1 className={ styles.cardHeading } title={ videoData.title }>
                { videoData.title.length > 27 ? `${ videoData.title.substring( 0, 25 ) }...` : videoData.title }
            </h1>
            <div className={ styles.textOfCard }>
                <span className={ styles.cardViews } title={ `${ videoData.viewCount } views` } style={ { backgroundSize: `200%` } }>
                    { videoData.viewCount } views
                </span>
                <span className={ styles.cardTime } title={ `Published on : ${ new Date( videoData.publishedDate ).toLocaleString() }` } style={ { backgroundSize: `200%` } }>
                    { new Date( videoData.publishedDate ).toLocaleDateString( 'en-IN' ) }
                </span>
            </div>
        </div>
    );
};

export default VideoCard;

import styles from './Video.module.css'
import YouTube from 'react-youtube';
import { useState } from 'react';


export default function Video(props) {
    const [showVideo, setShowVideo] = useState(false);

    const handleClick = () => {
        setShowVideo(true);
    };

    return (
        <>
            {showVideo ? (
                <div className={styles.videoContainer}><YouTube videoId={props.videoId} opts={{ playerVars: { autoplay: 1 } }} /></div>
            ) : (
                <div className={styles.thumbnail} style={{backgroundImage: `url(${props.thumbnail})`}} alt="Video Thumbnail" onClick={handleClick}>
                    <img src="./images/components/play-circle.svg" alt="Play Button" className={styles.playButton}/>
                </div>
            )}
        </>
    );
}
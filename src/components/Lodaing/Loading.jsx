import { useRef } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import animationData from '../../assets/animations/vinyl-loading.json';
import styles from './index.module.scss';

const Loading = () => {
    const player = useRef(null);
    return (
        <div className={styles.loadingWrapper}>
            <Player
                ref={player}
                autoplay={true}
                loop={true}
                controls={true}
                src={animationData}
                style={{ height: '300px', width: '300px' }}
            >
                {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
            </Player>

        </div>

    )
}

export default Loading;
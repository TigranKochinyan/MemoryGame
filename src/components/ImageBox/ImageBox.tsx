import { FC, ReactElement, useRef } from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import animationData from '../../assets/animations/pumpkin-evil-laugh-loop.json';


import styles from "./index.module.scss";

interface IProps {
  imageUrl: string;
  imageKey: number;
  handleFlip: any;
  fliped: boolean;
  imageUniqueKey: string;
}

const ImageBox: FC<IProps> = ({ imageUrl, imageKey, handleFlip, imageUniqueKey, fliped }): ReactElement => {
  const player = useRef(null);
  const handleClick = () => {
    console.log("imageKey:", imageKey);
    handleFlip(imageUniqueKey)
  };

  return (
    <>
      <div onClick={!fliped ? handleClick : () => {}} className={styles["flip-card"]}>
        <div data-fliped={fliped} className={styles["flip-card-inner"]}>
          <div className={styles["flip-card-front"]}>
            <Player
                ref={player}
                autoplay={true}
                loop={false}
                controls={true}
                src={animationData}
                style={{ height: '200px', width: '200px' }}
            />
            {/* <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p> */}
          </div>
          <div className={styles["flip-card-back"]}>
            <img src={imageUrl} alt="Avatar" width="200px" height="200px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageBox;

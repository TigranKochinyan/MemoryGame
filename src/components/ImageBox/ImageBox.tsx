import { FC, ReactElement, useState } from "react";
import styles from "./index.module.scss";

interface IProps {
  imageUrl: string;
  imageKey: number;
  handleFlip: any;
  fliped: boolean;
}

const ImageBox: FC<IProps> = ({ imageUrl, imageKey, handleFlip, fliped }): ReactElement => {
  // const [fliped, setFliped] = useState(false);
  const handleClick = () => {
    console.log("imageKey:", imageKey);
    handleFlip(imageKey)
  };

  return (
    <>
      <div onClick={!fliped ? handleClick : () => {}} className={styles["flip-card"]}>
        <div data-fliped={fliped} className={styles["flip-card-inner"]}>
          <div className={styles["flip-card-front"]}>
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
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

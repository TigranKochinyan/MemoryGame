import { ReactElement, FC } from 'react';
import styles from './index.module.scss';

interface IProps {
    children?: any[] | any;// TODO delete any_s
}

const Container: FC<IProps> = ({ children }): ReactElement => {
  return (
    <div
      className={styles.container}
    >
      {children}
    </div>
  );
};

export default Container;
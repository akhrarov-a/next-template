import { hoc } from '@packages/utils/hoc';
import React from 'react';
import styles from './home.module.scss';
import { useHomeProps } from './home.props';

/**
 * <Home />
 */
const Home = hoc(useHomeProps, ({ counter, onPlusClick }) => (
  <div className={styles.home}>
    HOME
    <div>COUNTER IS {counter}</div>
    <button onClick={onPlusClick}>PLUS</button>
  </div>
));

export { Home };

import React from 'react';
import clsx from 'clsx';
import styles from './Icon.module.css';

const Icon = ({ type = 'edit' }) => {
  return (
    <button
      className={clsx(styles.icon, {
        [styles.icon__edit]: type === 'edit',
        [styles.icon__destroy]: type === 'destroy',
        [styles.icon__pause]: type === 'pause',
        [styles.icon__play]: type === 'play',
      })}
    ></button>
  );
};

export default Icon;

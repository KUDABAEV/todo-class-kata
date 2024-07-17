import React from 'react';

import styles from './CheckBox.module.css';

const CheckBox = ({ checked, onChange }) => {
  return (
    <label>
      <input className={styles.defaultCheckbox} type="checkbox" checked={checked} onChange={onChange} />
      <div className={styles.customCheckbox}></div>
    </label>
  );
};

export default CheckBox;

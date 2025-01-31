import React from 'react';
import styles from './checkbox.module.css';
const Checkbox = ({ checked, onChange }) => {
    return (
        <div className={styles.containerInputCheck}>
        <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles.check}
        />
        </div>
        );
};

export default Checkbox;
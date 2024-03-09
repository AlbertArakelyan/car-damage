import { FC } from 'react';

import { IDamageSelectorProps } from './types';

import styles from './DamageSelector.module.css';

const DamageSelector: FC<IDamageSelectorProps> = ({ wrapperClassName = '', value, ...props }) => {
  return (
    <label className={`${styles['damage-selector']} ${wrapperClassName}`} htmlFor={`damage-radio-${value}`}>
      <input
        className={styles['damage-selector__input']}
        id={`damage-radio-${value}`}
        type="checkbox"
        name="damage"
        value={value}
        tabIndex={-1}
        aria-hidden
        {...props}
      />
      <span
        className={styles['damage-selector__checked-indicator']}
        role="checkbox"
        tabIndex={0}
        aria-checked={props.checked}
        aria-labelledby={`damage-radio-${value}`}
      ></span>
    </label>
  );
};

export default DamageSelector;
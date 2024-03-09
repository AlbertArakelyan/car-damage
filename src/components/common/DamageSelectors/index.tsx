import { useEffect, useCallback, memo, ChangeEvent, FC } from 'react';
import { useUnit } from 'effector-react';

import { DamageSelector } from '../../../components';

import { getCarDamages, updateCarDamages, $carDamageStore, CarDamageType } from '../../../store/carDamage';

import { carDamagesTemplate } from '../../../constants';

import { IDamageSelectorsProps } from './types';

import styles from './DamageSelectors.module.css';

const DamageSelectors: FC<IDamageSelectorsProps> = ({ onPositionChange, onComplete }) => {
  const { list } = useUnit($carDamageStore);

  const getIsChecked = useCallback((value: CarDamageType) => {
    return list.includes(value);
  }, [list]);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const newList = e.target.checked ? [...list, e.target.value as CarDamageType] : list.filter((item) => item !== e.target.value);

    updateCarDamages(newList).then((res) => {
      if (onPositionChange) {
        onPositionChange(res);
      }
    });
  };

  const handleSubmit = () => {
    if (onComplete) {
      onComplete(list);
    }
  };

  useEffect(() => {
    getCarDamages();
  }, []);

  const carDamagesContent = (
    carDamagesTemplate.map((list) => {
      return (
        <div className={`${styles['damage-selectors__group']} ${styles[`damage-selectors__group--${list.id}`]}`} key={list.id}>
          {list.items.map((item) => {
            return (
              <DamageSelector wrapperClassName={styles[`damage-selector--${item}`]} key={item} value={item} checked={getIsChecked(item)} onChange={handleCheck} />
            );
          })}
        </div>
      );
    })
  );

  return (
    <div className={styles['damage-selectors']}>
      <div>
        {carDamagesContent}
      </div>
      <button className={styles['damage-selector-btn']} onClick={handleSubmit}>
        Rapporto danni
      </button>
    </div>
  );
};

export default memo(DamageSelectors);
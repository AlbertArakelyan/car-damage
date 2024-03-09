import { useEffect, FC } from 'react';

import { DamageSelectors } from '../components';

import { updateCarDamages } from '../store/carDamage';

import { IAppProps } from './types.ts';

import styles from './App.module.css';

const App: FC<IAppProps> = ({ options }) => {
  useEffect(() => {
    if (options?.options?.onInit) {
      options.options.onInit();
    }

    if (options?.options?.initializedOptions) {
      updateCarDamages(options.options.initializedOptions);
    }
  }, []);


  return (
    <div className={styles['app']}>
      <div className={styles['car-damage-container']}>
        <div className={styles['car-image-wrapper']}>
          <img className={styles['car-image']} src="/car.png" alt="Car" width={463} height={202} />
        </div>
        <DamageSelectors
          onPositionChange={options.options?.onPositionChange}
          onComplete={options.options?.onComplete}
        />
      </div>
    </div>
  );
};

export default App;

import { createStore } from 'effector';

import { getCarDamages, updateCarDamages } from './carDamage.effects';

import { ICarDamageStore } from './types';

export const $carDamageStore = createStore<ICarDamageStore>({
  list: [],
});

$carDamageStore.on(getCarDamages.doneData, (state, payload) => {
  return {
    ...state,
    list: payload,
  };
});

$carDamageStore.on(updateCarDamages.doneData, (state, payload) => {
  return {
    ...state,
    list: payload,
  };
});
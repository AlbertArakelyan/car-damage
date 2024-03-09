import { createEffect } from 'effector';

import carDamageService from '../../services/carDamage.service';

import { CarDamageType } from './types';

import { smthWentWrong } from '../../constants';

export const getCarDamages = createEffect<void, CarDamageType[]>(async () => {
  try {
    const response = await carDamageService.getCarDamages<CarDamageType[]>();

    if (!response?.data) {
      throw new Error(smthWentWrong);
    }

    return response.data;
  } catch (error) {
    console.log('getCarDamages:', error);
    throw error;
  }
});

export const updateCarDamages = createEffect<CarDamageType[], CarDamageType[]>(async (carDamages) => {
  try {
    const response = await carDamageService.updateCarDamages<CarDamageType[], CarDamageType[]>(carDamages);

    if (!response?.data) {
      throw new Error(smthWentWrong);
    }

    return response.data;
  } catch (error) {
    console.log('updateCarDamages:', error);
    throw error;
  }
});
import { CarDamageType } from '../store/carDamage';

export type OnPositionChangeType = (positions: CarDamageType[]) => any;
export type OnCompleteType = (positions: CarDamageType[]) => any;

export interface IPluginOptions {
  selector?: string;
  options?: {
    initializedOptions?: CarDamageType[];
    onPositionChange?: OnPositionChangeType;
    onComplete?: OnCompleteType;
    onInit?: () => any;
  };
}
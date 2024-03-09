import { CarDamageType } from '../store/carDamage';

interface ICarDamageTemplate {
  id: string;
  items: CarDamageType[];
}

export const carDamagesTemplate: ICarDamageTemplate[] = [
  {
    id: '1',
    items: ['A1', 'A2', 'A3', 'A4'],
  },
  {
    id: '2',
    items: ['B1', 'B2', 'B3', 'B4', 'B5'],
  },
  {
    id: '3',
    items: ['C1', 'C2', 'C3', 'C4'],
  },
];
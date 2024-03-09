import { request } from '../utils';

const carDamageService = {
  getCarDamages<T>() {
    return request<T>('GET', 'b944ff');
  },
  updateCarDamages<T, D>(carDamages: D) {
    return request<T>('POST', 'b944ff', carDamages);
  }
};

export default carDamageService;
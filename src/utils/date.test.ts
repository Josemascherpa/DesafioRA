import { getCurrentDate } from './getCurrentDate';

describe('getCurrentDate', () => {
  it('deberia devolver la fecha en formato:DD-MM-YYYY', () => {
    const mockDate = new Date(2025, 3, 7); // 07-04-2025

    jest.useFakeTimers().setSystemTime(mockDate);//devolver la fecha seteada...

    const result = getCurrentDate();
    expect(result).toBe('07-04-2025');//lo que se espera que devuelva

    jest.useRealTimers();
  });
});

export const getCurrentDate = (): string => {
  //retornar DD-MM-YYYY
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');//agrego un 0 para cumplir la fecha 
  const month = String(date.getMonth() + 1).padStart(2, '0'); //empieza desde el 0 asi que le agrego 1
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
export const parseDate = (date: Date) => {
  let day = date.getDate();

  // @ts-ignore
  day = day > 9 ? day : `0${day}`;
  let month = date.getMonth() + 1;

  // @ts-ignore
  month = month > 9 ? month : `0${month}`;
  return `${date.getFullYear()}-${month}-${day}`;
};

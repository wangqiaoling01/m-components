export const toLine = (value: string) =>
  value.replace(/(A-Z)/g, '-$1').toLocaleLowerCase();

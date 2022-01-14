export const comma = (value) => {
  if (value === 0) return 0;
  if (value === null) return 0;
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

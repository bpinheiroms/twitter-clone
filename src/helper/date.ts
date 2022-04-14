const convertDateTimezone = (date: Date): string => {
  const offset = date.getTimezoneOffset();
  const newDate = new Date(date.getTime() - offset * 60 * 1000);

  return newDate.toISOString().split('.')[0];
};

export { convertDateTimezone };

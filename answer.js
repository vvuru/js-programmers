function calculateDaysBetweenDates(begin, end) {
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const millisBetween = endDate.getTime() - beginDate.getTime();
  const days = millisBetween / millisecondsPerDay;

  return days;
}

console.log(calculateDaysBetweenDates('2023-10-15 23:33:22','2023-10-10 23:33:22'));


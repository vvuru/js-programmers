// Set the two dates
const date1 = new Date('2022-01-01');
const date2 = new Date('2022-01-15');

// Calculate the difference in milliseconds
const diffInMs = Math.abs(date2 - date1);

// Convert milliseconds to days
const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

console.log(diffInDays); // Output: 14

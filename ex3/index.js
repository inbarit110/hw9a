const moment = require('moment');

// Display the current date
console.log(moment().format('dddd, MMMM Do YYYY'));

// Compute the number of years since 1976, November 26th
const startDate = moment('1976-11-26');
const yearsSinceStart = moment().diff(startDate, 'years');
console.log(yearsSinceStart, 'years ago');
// TODO: load the "accounting.js" module
// Load the accounting.js module
const Account = require('./accounting');

// Create object from the exported class
const myAccount = new Account("Jeff");
myAccount.credit(150);
console.log(myAccount.describe());

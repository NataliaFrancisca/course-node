const _ = require('lodash');

const a = [1,8,10,5,6];
const b = [7,8,9,10,11];

const diff = _.difference(a,b);
console.log(diff);
/* Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out */

const filter_list = list => list.filter(isNumber)

const isNumber = value => typeof value === 'number'

console.log(filter_list([1,2,'a','b'])) // [1,2]
console.log(filter_list([1,'a','b',0,15])) // [1,0,15]
console.log(filter_list([1,2,'aasf','1','123',123])) // [1,2,123]

/* You are given a string of space separated numbers, and have to return the highest and lowest number */

const highAndLow = (numbers) => {
	numbers = numbers.split(' ').map(Number)
	return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}

console.log(highAndLow("1 2 3 4 5"))  // "5 1"
console.log(highAndLow("1 2 -3 4 5")) // "5 -3"
console.log(highAndLow("1 9 3 4 -5")) // "9 -5"

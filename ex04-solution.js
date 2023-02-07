/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels (but not y).

The input string will only consist of lower case letters and/or spaces. */

const getCount = (string) => string.split('').filter(isVowel).length

const isVowel = character => "aeiouAEIOU".includes(character)

console.log(getCount(`roses are red`)) // 5
console.log(getCount(`violets are blue`)) // 7
console.log(getCount(`i can't rhyme`)) // 3
console.log(getCount(`banana`)) // 3

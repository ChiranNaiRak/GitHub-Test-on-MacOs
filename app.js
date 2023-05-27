//Q1 //retry again later on 

/* function filterOutFalsy(first,second){
    if (!first){
        return first
    }
    return second
}  */

/* function filterOutFalsy(first,second) {
    return !first ? first : second
}

console.log(filterOutFalsy(0,500))
console.log(filterOutFalsy(false,100))
console.log(filterOutFalsy([true,'Dog'])) //IDK about this one  */

//Q2

/* function arrLength(array){
    return array.length
}

console.log(arrLength([1,2,3]))
console.log(arrLength([1,2,3,4]))
console.log(arrLength([])) */

//Q3

/* function lastElem(array){
    return array[array.length - 1]
}

console.log(lastElem([1,2,3,4,5]))
console.log(lastElem(['dog','cat','ball']))
console.log(lastElem([null,5,false])) */

//Q5

/* function arrSum(array) {
    let sum = 0
    for (let i = 0; i < array.length ; i++){
        sum = sum + array[i] //since we're looping through every element of the array using array[i], when we add the elements which we looped to sum = 0, we get the sum
    }
    return sum //we return outside the loop because if we put it inside the loop, it'll break the loop once it sees a return statement even on the first loop which only gives us 1 element to add to the sum = 0
}

console.log(arrSum([2,2,2]))
console.log(arrSum([2,2,2]))
console.log(arrSum([2,2,2])) */

//Q6

/* function progressiveSum(number) {
    let sum = 0 
    for (let i = 1 ; i <= number ; i++){
        sum = sum + i 
    }
    return sum
}

function progressiveSum(number){
    let sum = 0
    for (let i = 0; i < number + 1; i++){
        sum = sum + i
    }
    return sum
}

console.log(progressiveSum(3))
console.log(progressiveSum(4))
console.log(progressiveSum(600)) */

//Q7

/* function calcTime(seconds){

    let minute = Math.floor(seconds/60) //this is to round up after we divide by 60
    let second = seconds%60 //this is to get the remainder of seconds after we divide by 60
    
    if (minute.toString().length === 1) { //this is to convert the minute into string so that we can add 0 infront of the minutes IF its only 1 digit or have a length of 1 
        minute = '0' + minute
    }
    if (second.toString().length === 1) { //this is to convert the second into string so that we can add 0 infront of the second IF its only 1 digit or have a length of 1 
        second = '0' + second
    }

    return minute + ':' + second //this is to make the minute and second into the format we want which is MM:SS

}

console.log(calcTime(66))
console.log(calcTime(50))
console.log(calcTime(300)) */

//Q8

/* function getMax(array){
    let max = array[0]
    for (let i = 0; i < array.length; i++){
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
} */

/* function getMax(array){
    let max = array[0] //we let the first element be the biggest
    for (let i = 1; i < array.length; i++){ //start i = 1 cause we already assume the first element in the array with the index of 0 is the largest so we just check for the rest of the elements
        if (array[i] > max) { //if the element is bigger than the max or the first element then the element is the new max. This process will repeat until the last array element. 
            max = array[i]
        }
    }
    return max //we return the largest number in the array after the loop ends and max is already the largest number/element
} */
/* 
function getMax(array) { //own attempt
    let max = array[0]
    for (let i = 1; i < array.length; i++){
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}

console.log(getMax([5,100,0]))
console.log(getMax([12,10,-20]))
console.log(getMax([-300,-200,-100])) */

//Q8

//Decrementing for loop

/* 
function reverseString(string){
    let newString = ''
    for (let i = string.length - 1 ; i >= 0 ; i--){
        newString = newString + string[i]
    }
    return newString
}
 */

/* 

//Incrementing for loop

function reverseString(string) {
    let newString = ''
    for (let i = 0; i <= string.length -1 ; i++){
        newString = string[i] + newString
    }
    return newString
}
console.log(reverseString('hello'))
console.log(reverseString('Chiran'))
console.log(reverseString('This is amazing')) 
*/

//Array Reverse Property

/* function reverseString(string){ 
    return string.split('').reverse().join('')
}

console.log(reverseString('hello'))
console.log(reverseString('Chiran'))
console.log(reverseString('This is amazing')) */

//Q9

//Solution 1 : Using for loops

/* function convertToZeroes(array){
    for (let i = 0; i < array.length ; i++){
        array[i] = 0
    }
    return array
}

console.log(convertToZeroes([5,5,5,10])) */

//Solution 2 : Using array fill

/* function convertToZeroes(array){
    return new Array(array.length).fill(0)
}

console.log(convertToZeroes([5,5,5,0,1]))
 */


/* console.log(convertToZeroes([5,5,5,0,1]))
 */








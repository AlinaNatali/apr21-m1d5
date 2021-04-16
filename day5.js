// A
let test = "String"

console.log('------- EX B -------')

// // B
let sum = 0
for (var i = 10; i < 21; i++) {
    sum = sum + i
    console.log(i, sum)
    // console.log("Result of the sum between 10 and 20 " + sum[i] + " ")
}
console.log('------')
console.log('Result: ' + sum)
console.log('------- EX C -------')

// C

function random(number) {
    return Math.ceil(Math.random() * number) + 1;

}
let number = random(20)
console.log(number)


console.log('------- EX D -------')
// D
let me = {
    name: "Alina",
    surname: "Lazovik",
    age: 30
}
console.log(me)

console.log('------- EX E -------')

// E
delete me.age
console.log(me)

console.log('------- EX F -------')

//  F
me.skills = ["lightroom", "photoshop", "blender"]

console.log(me)

console.log('------- EX G -------')

// G

console.log(me.skills.slice(1))

console.log('------- EX 1 -------')

// EX1
function random(dice) {
    return Math.ceil(Math.random() * dice);

}
let dice = random(6)
console.log(dice)

console.log('------- EX 2 -------')

// EX2  
function whoIsBigger(n1, n2) {
    if (n1 > n2) {
        return n1
    } else {
        return n2
    }
}
console.log('1,2 -> ' + whoIsBigger(1, 2))
console.log('10000,45 -> ' + whoIsBigger(10000, 45))

console.log('------- EX 3 -------')

// 3 
const oldString = "I love coding"
function splitMe(s) {
    let newArray = s.split(" ")
    return newArray
}

console.log(splitMe("I love coding"))

console.log('------- EX 4 -------')

// 4 

const allLetters = "Dog"
function deleteOne(inputString, removeFirst) {
    if (removeFirst === true) {
        return inputString.slice(1)
    } else {
        return inputString.slice(2)
    }
}
console.log(deleteOne("Dog", true))

console.log('------- EX 5 -------')
// 5

function onlyLetters(inputString) {
    let withoutNumbers = inputString
    for (let i = 0; i < 10; i++) {
        console.log(withoutNumbers)
        withoutNumbers = withoutNumbers.replaceAll(i, '')
    }
    return withoutNumbers
}
console.log(onlyLetters("Dog"))

console.log('------- EX 6 -------')

// 6

function whatDayIsIt() {
    let today = Date()
    let day1 = today.getDay()
    return day1
    }


console.log(today.getDay)
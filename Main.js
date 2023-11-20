/*const my String = 'I Love JavaScript'
 const regex = /Kotlin/
 const contains Regex = regex.test(myString)
 console.log (containsRegex)


 const myString = 'I Love JavaScript'
 const myRegex = /JavaScript/
 let newString = myString.replace(myRegex, 'Kotlin')
 console.log (newString)


 const my String = 'I Love JavaScript'
 let newRegex = myString.search (/JavaScript/)
 console.log(newRegex)



 const str = 'RegExr was created by gskinner.com, and is proudly hosted by Media Temple. Edit the Expression
 and Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx
 are supported. Validate your expression with Tests mode. The side bar includes a Cheatsheet, full Reference,
 and Help. You can also Save & Share with the Community, and view patterns you create or favorite in My Patterns.
 Explore results with the Tools below. Replace & List output custom results. Details lists capture groups.
 Explain describes your expression in plain English.`;

 let myRegex = str.match(/and/g)
 console.log(myRegex. length)



function replace() {
let searchText = document.getElementById("search").va
let replaceText = document.getElementById("replace").
let text = document.getElementById("text").innerHTML
let newText = document.getElementById("text")
let reg=new RegExp(searchText, 'gi')
text = text.replace(reg, replaceText)
newText.innerHTML = text 



function replace() {
let searchText = document.getElementById("search").va
let replaceText = document.getElementById("replace").
let text = document.getElementById("text").innerHTML
let newText = document.getElementById("text")
let reg = new RegExp(searchText, 'gi')
text = text.replace(reg, replaceText)
newText.innerHTML = text



console.log(1)
console.log(2)
setTimeout(() = {
console.log(3)
}}, , 3000)
console.log(4)
console.log(5)



console.log('Start')
function userInfo(name) {
set Timeout( () => {
console.log('** User info received **')
return name
},3000)
}
let userName = userInfo('Khalid')
console.log(userName)
console.log('End')



console.log('Start')
function userInfo(name, callback) {
setTimeout(() = {
console.log('** User info received **')
callback(name)
}, 3000)
}
let userName = userInfo('Khalid', name => {
console.log('Your name is ${name}`)
})
console.log('End')



console.log('Start')
const newUser = new Promise((resolve, reject) =>{
setTimeout(() => {
const userInfo = {
name: 'Khalid',
age: 19
}
resolve(userInfo)
}, 3000)
})
newUser
.then(res => {
console.log('** User info received **')
console.log (res)
})




console.log('Start')
const newUser = new Promise((resolve, reject) => {
setTimeout(() = {
const userInfo = {
name: 'Khalid',
age: 19 Į
}
resolve(userInfo)
}, 3000)
})
const addNewUser = userInfo => {
let userAge = userInfo.age
let adultAge;
if (userAge >= 18) {
adultAge = `${userInfo.name} is an Adult`
} else {
adultAge = `${userInfo[name} is NOT an Adult`
}
return Promise. resolve (adultAge)
}
newUser
.then(addNewUser)
.then(res => {
console.loa('** User info received **')




const adaNewuser = userinTO => {
let userAge = userInfo.age
let adultAge;
if ( userAge >= 18) {
adultAge = `${userInfo.name} is an Adult
return Promise. resolve (adultAge)
} else {
adultAge = `${userInfo.name} is NOT an Adult
return Promise.reject(new Error(adultAge)
}
}
newUser
.then(addNewUser)
.then(res => {
console.log('** User info received ** ' )
console.log(res)
}) I
.catch(err => {



let ages = [25, 30, 32]
let [firstAge, secondAge, thirdAge] = ages
console.log(firstAge, secondAge, thirdAge)




let colors = ['red', 'green']
let [firstColor, secondColor, thirdColor] = colors
console.log(firstColor, secondColor, thirdColor)




let colors = ['red', 'green', 'black']
let [firstColor, secondColor, thirdColor = 'blue'] = colors
console.log(firstColor, secondColor, thirdColor)



let colors = ['red', 'green', 'blue']
let [,,firstcolor] = colors
console.log (firstColor)



let numbers = [1, 2, [3, 4]]
let [first, second, [firstValue, secondValue]] = numbers
console.log(first, second, firstValue, secondValue)



let first = 5, second = 7;
[first, second] = [first, first]
console.log(first, second)




let colors = ['red', 'green'];
[colors [0], colors [1]] = ['blue', 'black', 'white']
console.log(colors)






let student = {
name: 'Ali',
age : 25
}
let {age: yourAge, name: yourName} = student
console.log (yourName, yourAge)




let student = {
name: 'Ali',
age : 25,
gender: true
}
let {name, age, gender} = stu log (...data: any[]): void
console.log (name, age, gender)




let student = {
name: 'Ali',
age : 25
}
let name = 'Saleh', age = 22;
({name, age} = student)
console.log (name, age)




let student = {
name : {
firstName: 'Ali',
lastName: 'Nasser'
},
age : 25
}
let {name: {lastName: yourLastName}} = student
console.log (yourLastName)




let student = {
name : {
firstName: 'Ali',
lastName: 'Nasser'
},
'@my age': 25
}
console.log(student ['@my age'])




let numbers = [1, 2, 3, 4, 5];
let [first, second, ...others] = numbers
console.log(first, second, others [0])




let first = [1, 2, 3]
let second = [4, 5]
let third = [...first, ...second]
console.log(third)



function sum(first, second, ...others){
console.log(...others)
return first + second
}
console.log (sum (1, 2, 6, 80, 75))




let numbers = [1, 2, 3, 4, 5]
let [first, second, ...others] = numbers
console.log (...others)



let numbers = [1, 2]
let [first, second, ...others] = numbers
console.log (first, second, others)




let student = {
name: 'Salem',
age: 18,
gender: false
}
let {name, ...others} = log(...data: any []); void
console.log(name, others)




let student = {
name: 'Salem',
age: 18
}
let {name, nickname = 'unknown'} = student
console.log (name, nickname)*/


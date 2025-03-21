//depends on how data stores in memory and how we access data from memories
// data are 2 types-->>>>


//Primitive types-> (pass by value)
//string number boolean null undeined symbol BigInt

//reference/non-primitive types-> (pass by reference)
//array object function

//js == Dynamic Typing → You don’t need to declare variable types; 
// they can change at runtime

const id= Symbol('123')
const anotherId =Symbol('123')

console.log(id == anotherId)
console.log(id === anotherId)

const bigNumber=5436584359238759489320584n
console.log(typeof bigNumber) //bigint

let fruits =["mango" , "banana" , "lichi" , "jackfruit"]
console.log(fruits)
let stu={
    name:"muntaha",
    age:22,
    uni:"cuet",
    dept:"cse"
}
console.log(stu)

let fun=function(){
    console.log("hello world!!!!!!")
}
fun()
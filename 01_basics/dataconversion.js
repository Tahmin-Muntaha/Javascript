let score=33
console.log(typeof score)
score="33"
console.log(typeof score)

let valueInNumber=Number(score)
console.log(valueInNumber) //33
console.log(typeof valueInNumber)
score="33abc"
valueInNumber=Number(score)
console.log(valueInNumber) //NaN
console.log(typeof valueInNumber)
console.log(typeof NaN)
score=null
valueInNumber=Number(score)
console.log(valueInNumber) //0
console.log(typeof valueInNumber)
score=undefined
valueInNumber=Number(score)
console.log(valueInNumber) //NaN
console.log(typeof valueInNumber)


// 33  == 33
// "33" == 33
//"33abc" ==NaN
//true == 1
// false == 0

let logged =1 // "jfhgd" -1 33 "33"
console.log(Boolean(logged)) // true
logged =0 // " "
console.log(Boolean(logged))  //false

let  number=3300
console.log(String(number))
console.log(typeof String(number))
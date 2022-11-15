// for variables which are intialised befor they are used scope of those variables is undefined.
console.log(x)
// console.log(y)
console.log(getname)
console.log(getnames)
console.log(getFirstName)
var x=4
// 3 ways of writing a function in javascript.
function getname(){
    console.log("Hello my name is saivivek ")
}
var getnames=function(){
    console.log("Hello my name is soumya")
}
var getFirstName=()=>{
    console.log("Hello my name is sonu")
}
getname()

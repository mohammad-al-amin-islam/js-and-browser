function display() {
    console.log('test timeout');
}

console.log('i am the first one')
console.log('i am the second one')
// setTimeout(display,3000)
//we can write function into it also
/* setTimeout(function(){
    console.log('direct function testing')
},2000); */
//also we can use arrow function
setTimeout(() => {
    console.log("testing with arrow function");
}, 2000);
console.log('i am the third one')
console.log('i am the fourth one')
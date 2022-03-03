console.log(11)

//it will not be stopped
/* let clock = 0;
setInterval(() => {
    //clock++;
    console.log(clock++);
}, 1000); */
console.log(22);

let clock = 0;

//to stopp we have declare it in variable and clear with this timeid variable in condition.
const timeId = setInterval(() => {
    //clock++;
    console.log(++clock);
    if(clock>5){
        clearInterval(timeId);
    }
    
}, 1000);

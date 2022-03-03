console.log(11)
/* let clock = 0;
setInterval(() => {
    //clock++;
    console.log(clock++);
}, 1000); */
console.log(22);

let clock = 0;
const timeId = setInterval(() => {
    //clock++;
    console.log(++clock);
    if(clock>5){
        clearInterval(timeId);
    }
    
}, 1000);

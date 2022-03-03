console.log(11);
console.log(22);
//fetch is works asynchoronus way
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
console.log(33);
console.log(44);
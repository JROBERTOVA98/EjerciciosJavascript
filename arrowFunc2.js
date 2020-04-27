/*const name = 'Roberto';

//functions

const greet = () => 'hello';

let resultOne = greet();
console.log(resultOne);

//methods
let resultTwo = name.toUpperCase();
console.log(resultTwo);

//callback & foreach
let people = ['Roberto', 'Sofia', 'Carlos','Isabel','Marian'];

const logPerson = (person, index) => {
    console.log(`${index} - hola ${person}`);
};

people.forEach(logPerson);
*/
//get a reference  to the 'ul'
const ul = document.querySelector('.people');

const people = ['Roberto', 'Sofia', 'Carlos','Isabel','Marian'];

let html = ``;

people.forEach(function(person){
    //create a html template
    html += `<li style="color: red">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
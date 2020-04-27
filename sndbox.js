//const para = document.querySelector('div.error');
//const para = document.querySelector('body > h1');
//console.log(para);

//const paras = document.querySelectorAll('p');
//const errors = document.querySelectorAll('.error');
//paras.forEach(para => {
//    console.log(para);
    
//})

//console.log(paras[2]);
//console.log(errors);
//--------------------------------------------------------------------//

//get an element by ID
//const title = document.getElementById('page-title');
//console.log(title);

//Get elements by their class name
//const errors = document.getElementsByClassName('error');
//console.log(errors);
//console.log(errors[0]);

//get elements by their tag name
//const paras = document.getElementsByTagName('p');
//console.log(paras);
//console.log(paras[1]);
//------------------------------------------------------------------

const para = document.querySelector('p');

//console.log(para.innerText);
//para.innerText += ' La pizza es deliciosa';

const paras = document.querySelectorAll('p');

//paras.forEach(para => {
//    console.log(para.innerText);
//    para.innerText += ' Aqui pongo mas texto';
//});

const content = document.querySelector('.content');

//console.log(content.innerHTML);
//content.innerHTML += '<h2> Este es un nuevo H2 </h2>';

const people = ['Jose', 'Roberto', 'Sofia'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});
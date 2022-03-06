'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.ovarlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].textContent);



// TODO1
/* 
we select an element using the selector, but then this time, we actually store the results of the selection so the selected element in this variable.
the limitation of or query selector method here for the first time,  so whenever we use query selector with a selector, which actually matches multiple elements, only the first one will get selected. And so here, we need another one. But it's pretty similar. It's called query selectorAll. it will selected all elements
We can selected all the show-modal. and to print it we can use for looping and print the textcontent. if we dont want to use {} its okay because there is only one line of code that will executed
*/

'use strict';

//TODO1
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

//TODO2
const showModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', showModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//TODO3
document.addEventListener('keydown', function(e){
  console.log(e.key);

  if(e.key === 'Escape' && !modal.classList.contains('hidden')){
    closeModal()
  }
})

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', function () {
//     console.log('Button clicked');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });

// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// TODO1
/* 
we select an element using the selector, but then this time, we actually store the results of the selection so the selected element in this variable.

the limitation of or query selector method here for the first time,  so whenever we use query selector with a selector, which actually matches multiple elements, only the first one will get selected. And so here, we need another one. But it's pretty similar. It's called query selectorAll. it will selected all elements

We can selected all the show-modal. and to print it we can use for looping and print the textcontent. if we dont want to use {} its okay because there is only one line of code that will executed
*/

//TODO2
/*
we will attach an event handler function to the element. And event handler and event listener are pretty much the same thing.

And in practice adding and removing classes, like we just did here, is the main way in which we change styles on websites. That's because a class basically aggregates many styles in just one class.

So basically display none means that it's not visible. And if we want it to be visible, we would set it to display block.

we are just defining the function here. We are not calling it itself. It is the JavaScript engine who will call this function as soon as the click event happens on exactly this element.

Not only did we make our code drier. But we also made it more readable. More expressive, and more declarative. So right now, when we read this code here, it's a lot easier to understand.

if you want to use the same function in multiple event listeners, then you need to specify that function as a separate function, like this one here. And then you can pass that function as an argument to multiple "add event listener" methods.

So working with classes is something that we do all the time. And there is a third thing that we do with classes, which is to check if a class is actually present on a certain element. by adding and removing them, we basically can activate and deactivate certain styles.
*/

//TODO3
/*
So in order to listen for keyboard events, we still need to use add event listener. Because the key press event is simply just another type of event. Now, keyboard events are so-called global events because they do not happen on one specific element. And for global events like keyboard events we usually list and on the whole document.

on the document we are basically listening for events everywhere. So no matter where they happen on the page, they will always trigger the event handler that we're going to specify here.

keypress, keydown, keyup

as the event occurs JavaScript, we'll call this function with the event object as an argument.

as I hit any key here on the keyboard, a key down event is generated and our list and our function here. So our handler function is waiting for that event to happen.
*/

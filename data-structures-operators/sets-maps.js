// TODO 16
// Set is basically just a collection of unique values.So that means that a set can never have any duplicates.

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Sphagetti', 'Pasta']);
console.log(ordersSet);
//Set(3) {'Pasta', 'Pizza', 'Sphagetti'}

console.log(new Set('Firyal')); // Set(6) {'F', 'i', 'r', 'y', 'a', …}
console.log(ordersSet.size); // 3
console.log(ordersSet.has('mcd')); // false
console.log(ordersSet.has('Pizza')); // true
ordersSet.add('Garlic Bread');
ordersSet.delete('Sphagetti');
console.log(ordersSet); // Set(3) {'Pasta', 'Pizza', 'Garlic Bread'}

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Water'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // (4) ['Waiter', 'Chef', 'Manager', 'Water']

console.log(
    new Set(staff).size 
); // 4

//in sets there are actually no indexes. And in fact, there is no way of getting values out of a set. we cannot call set one by one, but we can use array to call it [...new Set(staff)] like this. 

//So in a normal code base, the main use case of sets is actually to remove duplicate values of arrays.

//And so we can now create an array around this basically. And then we can unpack this entire set here using the spread operator, and then these elements will be put into the newly constructed array.

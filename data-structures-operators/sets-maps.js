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

console.log(new Set(staff).size); // 4

/**
 * the syntax of Set: const variable_name = new Set(['value', 'value'])
 * to check the length, use size: variable_name.size
 * to check if the value is exist, use has method: variable_name.has(value)
 * to add the value to set, use add: variable_name.add(value)
 * to delete the value from set, use delete: variable_name.delete(value)
 */


//in sets there are actually no indexes. And in fact, there is no way of getting values out of a set. we cannot call set one by one, but we can use array to call it [...new Set(staff)] like this.

//So in a normal code base, the main use case of sets is actually to remove duplicate values of arrays.

/**
 * see line 16
 * we can create an array around the set
 * unpack this entire set using spread operato: [...new Set(variable_name)]
 * then, the element  will be put into the newly constucted array
 */


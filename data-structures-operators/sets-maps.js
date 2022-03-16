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

///////////////////////////////////////////////

//TODO 17 Maps
//a map is a data structure that we can use to map values to keys.

const aot = new Map();
aot.set('name', 'Eren Yeager');
aot.set(1, 'Paradis');
aot.set(2, 'Marley');
aot.set('friends', ['Mikasa', 'Armin', 'Jean', 'Connie', 'Sasha']);
console.log(aot);
/**
 * Map(5) {'name' => 'Eren Yeager', 1 => 'Paradis', 2 => 'Marley', 'friends' => Array(5), 3 => 'Eldian'}
 */

console.log(aot.get('name')); // Eren Yeager
console.log(aot.has('friends')); // true
aot.delete(2);
// aot.clear();
const arr = [1, 2];
aot.set(arr, 'Test');
console.log(aot); // //Map(4) {'name' => 'Eren Yeager', 1 => 'Paradis', 'friends' => Array(5), Array(2) => 'Test'}
console.log(aot.size); // 4
console.log(aot.get(arr)); // Test

const rest = new Map();
rest
  .set('open', 8)
  .set('close', 22)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get(true)); // we are open

const time = 24;
console.log(rest.get(time >= rest.get('open') && time <= rest.get('close'))); // we are closed

//So, just like an object data is stored in key value pairs in maps. Now, the big difference between objects and maps is that in maps, the keys can have any type and this can be huge.

//So, in objects, the keys are basically always strings. But in maps, we can have any type of key. It could even be objects, or arrays, or other maps.

/**
 * to make map, syntax: const variable_name = new Map(); 
 * and to fill up data to the map, use key method: variable_name.set(key, value);
 * we can use any data type that we want
 * to read data from map, use get method: variable_name.get(key)
 * to delete one of the value, use delete method: variable_name.delete(key)
 * to check if a map contains a certain key, use has method: variable_name.has(key)
 * to delete all of the value in map, use clear method: variable_name.clear()
 */


/**
 * you can see we have key open, close and boolean, 
 * we can cimpare the current time with open and close to get the string that we want
 * when we pass in false we will get closed, when we pass in true we will get open
 * you can see the code at line 76
 * but its not really readable, so dont overuse this kind pattern
 */


/**
 * we can use arrays or object as map keys, you can see line 61
 * First, we have to make variable array as a key. 
 * second, we set the value of that array
 * last, we get the value by using get() inside the paranthesist call variable array (arr)
 */

This blog post compares four ways of looping over Arrays:

The for loop:

for (let index=0; index < someArray.length; index++) {
  const elem = someArray[index];
  // ···
}
The for-in loop:

for (const key in someArray) {
  console.log(key);
}
The Array method .forEach():

someArray.forEach((elem, index) => {
  console.log(elem, index);
});
The for-of loop:

for (const elem of someArray) {
  console.log(elem);
}
for-of is often the best choice. We’ll see why.

Table of contents:

The for loop [ES1]  
The for-in loop [ES1]  
The Array method .forEach() [ES5]  
Breaking from .forEach() – a workaround  
The for-of loop [ES6]  
for-of and iterable objects  
for-of and Array indices  
Conclusion  
More content on JavaScript  
The for loop [ES1]  
The plain for loop in JavaScript is old. It already existed in ECMAScript 1. This for loop logs the index and value of each element of arr:

const arr = ['a', 'b', 'c'];
arr.prop = 'property value';

for (let index=0; index < arr.length; index++) {
  const elem = arr[index];
  console.log(index, elem);
}

// Output:
// 0, 'a'
// 1, 'b'
// 2, 'c'
What are the pros and cons of this loop?

It is quite versatile, but alas also verbose when all we want to do is loop over an Array.
It is still useful if we don’t want to start looping with the first Array element. None of the other looping mechanisms let us do that.
The for-in loop [ES1]  
The for-in loop is as old as the for loop – it also already existed in ECMAScript 1. This for-in loop logs the keys of arr:

const arr = ['a', 'b', 'c'];
arr.prop = 'property value';

for (const key in arr) {
  console.log(key);
}

// Output:
// '0'
// '1'
// '2'
// 'prop'
for-in is not a good choice for looping over Arrays:

It visits property keys, not values.
As property keys, the indices of Array elements are strings, not numbers (more information on how Array elements work).
It visits all enumerable property keys (both own and inherited ones), not just those of Array elements.
for-in visiting inherited properties does have a use case: Looping over all enumerable properties of an object.

The Array method .forEach() [ES5]  
Given that neither for nor for-in are particularly well suited for looping over Arrays, a helper method was introduced in ECMAScript 5: Array.prototype.forEach():

const arr = ['a', 'b', 'c'];
arr.prop = 'property value';

arr.forEach((elem, index) => {
  console.log(elem, index);
});

// Output:
// 'a', 0
// 'b', 1
// 'c', 2
This method is really convenient: It gives us access to both Array elements and Array element indices without us having to do much. Arrow functions (which were introduced in ES6) made this method even more syntactically elegant.

The main downsides of .forEach() are:

You can’t use await in the “body” of this kind of loop.
You can’t leave a .forEach() loop early. In for loops, we can use break.
Breaking from .forEach() – a workaround  
There is a workaround if you want to use a loop like .forEach() and leave early: .some() also loops over all Array elements and stops if its callback returns a truthy value.

const arr = ['red', 'green', 'blue'];
arr.some((elem, index) => {
  if (index >= 2) {
    return true; // break from loop
  }
  console.log(elem);
  // This callback implicitly returns `undefined`, which
  // is a falsy value. Therefore, looping continues.
});

// Output:
// 'red'
// 'green'
Arguably, this is an abuse of .some() and I’m not sure how easy it is to understand this code (compared to for-of and break).

The for-of loop [ES6]  
The for-of loop was added to JavaScript in ECMAScript 6:

const arr = ['a', 'b', 'c'];
arr.prop = 'property value';

for (const elem of arr) {
  console.log(elem);
}
// Output:
// 'a'
// 'b'
// 'c'
for-of works really well for looping over Arrays:

It iterates over Array elements.
We can use await.
And it’s easy to migrate to for-await-of, should you need to.
We can use break and continue – even for outer scopes.
for-of and iterable objects  
An additional benefit of for-of is that we can loop not just over Arrays, but over any iterable object – for example, over Maps:

const myMap = new Map()
  .set(false, 'no')
  .set(true, 'yes')
;
for (const [key, value] of myMap) {
  console.log(key, value);
}

// Output:
// false, 'no'
// true, 'yes'
Iterating over myMap produces [key, value] pairs which we destructure to directly access the components of each pair.

for-of and Array indices  
The Array method .entries() returns an iterable over [index, value] pairs. If use for-of and destructuring with this method, we get convenient access to Array indices:

const arr = ['chocolate', 'vanilla', 'strawberry'];

for (const [index, elem] of arr.entries()) {
  console.log(index, elem);
}
// Output:
// 0, 'chocolate'
// 1, 'vanilla'
// 2, 'strawberry'
Conclusion  
As we have seen, the for-of loop beats for, for-in, and .forEach() w.r.t. usability.

Any difference in performance between the four looping mechanisms should normally not matter. If it does, you are probably doing something very computationally intensive and switching to WebAssembly may make sense.

More content on JavaScript  
My book “JavaScript for impatient programmers” is free to read online! This is its sales pitch:

This book makes JavaScript less challenging to learn for newcomers, by offering a modern view that is as consistent as possible.
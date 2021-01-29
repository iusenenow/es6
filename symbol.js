function* count() {
  yield 1;
  yield;
  yield 2
  yield 3
}

var generator = count()

console.log(generator);

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

function* add() {
  const num = yield
  yield 2 + num
  yield 4 + num
}

var generator2 = add()

console.log(generator2.next());
console.log(generator2.next(2));
console.log(generator2.next());
console.log(generator2.next());

let id = Symbol()

let id2 = Symbol('id2')

console.log(id);
console.log(id.toString());
console.log(id2.description);

let user = {
  name:"John",
  age:30,
  [id]:123
}

for (let key in user) console.log(key);

const userKeyArray = Object.keys(user)
console.log(userKeyArray);

//Get symbol by name
let sym = Symbol.for('name')
let sym2 = Symbol.for('id')

//Get name by symbol
console.log(Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym2));

let globalSymbol = Symbol.for('name')
let localSymbol = Symbol('name')

console.log(Symbol.keyFor(globalSymbol)); //name
console.log(Symbol.keyFor(localSymbol)); //undifined
console.log(localSymbol.description); //name
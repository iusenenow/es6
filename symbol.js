// let id = Symbol()

// let id2 = Symbol('id2')

// console.log(id);
// console.log(id.toString());
// console.log(id2.description);

// let user = {
//   name:"John",
//   age:30,
//   [id]:123
// }

// for (let key in user) console.log(key);

// const userKeyArray = Object.keys(user)
// console.log(userKeyArray);

// //Get symbol by name
// let sym = Symbol.for('name')
// let sym2 = Symbol.for('id')

// //Get name by symbol
// console.log(Symbol.keyFor(sym));
// console.log(Symbol.keyFor(sym2));

// let globalSymbol = Symbol.for('name')
// let localSymbol = Symbol('name')

// console.log(Symbol.keyFor(globalSymbol)); //name
// console.log(Symbol.keyFor(localSymbol)); //undifined
// console.log(localSymbol.description); //name

//向对象中添加方法:
//let game = {}

//声明一个对象
// let method = {
//   up: Symbol('up'),
//   down: Symbol('down')
// }

// game[method.up] = function () { console.log('我可以快速的上升。') }

// game[method.down] = function () { console.log('我可以快速的下降。'); }

// let youxi = {
//   name: "狼人杀",
//   [Symbol('say')]: function () { console.log("我可以发言。"); },
//   [Symbol('zibao')]: function () { console.log("我可以自爆。"); }
// }
// console.log(youxi);

// let keys = Reflect.ownKeys(youxi)

// console.log(keys);

// youxi[keys[1]]()
// youxi[keys[2]]()

//Difference between Reflect.ownKeys(obj) and Object.keys(obj):https://stackoverflow.com/questions/34449045/what-is-the-difference-between-reflect-ownkeysobj-and-object-keysobj

//Symbol的内置属性
// class Person {
//   static [Symbol.hasInstance](param) {
//     console.log(param);
//     console.log('我被用来检测类型了');
//     return true
//   }
// }

// let o = {}

// console.log(o instanceof Person);

//isConcatSpreadable
// const arr = [1,2,3]
// const arr2 = [4,5,6]
// arr2[Symbol.isConcatSpreadable] = false
// console.log(arr.concat(arr2));
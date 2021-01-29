//声明一个数组
// const xiyou = ['唐僧','孙悟空','猪八戒','沙僧']

// for (let i of xiyou) console.log(i); //键值：Value
// for (let i in xiyou) console.log(i); //键名：Key

// const  iterator = xiyou[Symbol.iterator]()

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

//迭代器应用，自定义遍历数据
const banji = {
  name:'终极一班',
  stus:[
    'Teresa',
    'Isabel',
    'Cynthia',
    'Jasmin'
  ],
  [Symbol.iterator](){

  }
}

// function* count() {
//   yield 1;
//   yield;
//   yield 2
//   yield 3
// }

// var generator = count()

// console.log(generator);

// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

// function* add() {
//   const num = yield
//   yield 2 + num
//   yield 4 + num
// }

// var generator2 = add()

// console.log(generator2.next());
// console.log(generator2.next(2));
// console.log(generator2.next());
// console.log(generator2.next());
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
  name: '终极一班',
  stus: [
    'Teresa',
    'Isabel',
    'Cynthia',
    'Jasmin'
  ],
  [Symbol.iterator]() {
    //索引变量
    let index = 0
    let _this = this
    return {
      next() {
        if (index < _this.stus.length) {
          const result = { value: _this.stus[index], done: false }
          //下标自增
          index++
          //返回结果
          return result
        }
        return { value: undefined, done: true }
      }
    }
  }
}

//for (let i of banji) console.log(i);

const range = { from: 1, to: 5 }

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { value: this.current++, done: false }
      }
      return { done: true }
    }
  }
}

//for (let num of range) console.log(num);

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

//Generators生成器函数
//生成器其实就是一个特殊的函数
//异步编程
//yield相当于函数代码的分隔符
function * gen(){
  console.log(111);
  yield 'Teresa'
  console.log(222);
  yield 'Isabel'
  console.log(333);
  yield 'Cynthia'
  console.log(444);
  yield
  return 1
}

let generator = gen()
//console.log(generator);
console.log(JSON.stringify(generator.next()))
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

//遍历
for(let v of gen()) console.log(v);

function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i
}

for(let value of generateSequence(1, 5)) console.log(value);

function* generatePasswordCodes() {
  yield* generateSequence(48, 57)
  yield* generateSequence(65, 90)
  yield* generateSequence(97, 122)
}

let str = ''

for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code)
}

console.log(str);

function* gen2() {
  // Pass a question to the outer code and wait for an answer
  let result = yield "2 + 2 = ?"; // (*)

  console.log(result);
}

let generator2 = gen2()

let question = generator2.next().value
console.log(question);

//generator2.next(4)
try {
  generator2.throw(new Error("The answer is not fould in the database."))
} catch (error) {
  console.error(error);
}
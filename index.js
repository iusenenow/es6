// 4.let经典案例实践
// let items = document.getElementsByClassName('item')

// 遍历并绑定事件
// for (let i = 0; i < items.length; i++) {
//   items[i].onclick = function () {
//     console.log(this);
//     //this.style.background = 'coral'
//     items[i].style.background = 'coral'
//   }
//   console.log(i);
// }

// 5.const常量
// 1)常亮一定要赋初始值:
// const a; //Missing initializer in const declaration
// 2)常量的值不能修改
// 3)块儿级作用域
// 4)对于数组和对象的元素修改，不算做对常量的修改，不会报错

// 6.ES6允许按照一定模式从数组和对象中提取值，对变量进行赋值，这被称为解构赋值
// 1)数组的解构
// const f4 = ['a', 'b', 'c', 'd']
// let [x, l, z, s] = f4
// console.log(x, l, z, s) //a,b,c,d
// 2)对象的解构
// const zhao = {
//   name: '赵本山',
//   age: 70,
//   xiaopin: function () {
//     console.log("我可以演小品")
//   }
// }

// let { name, age, xiaopin } = zhao
// console.log(name, age, xiaopin)
// xiaopin()

// 9.箭头函数
// 1)this是静态的，this始终指向函数声明时所在作用域下的this的值
function getName() {
  console.log(this.name)
}

let getName2 = () => console.log(this.name)

window.name = 'Teresa'
const school = { name: 'ODPS' }
//直接调用
//getName() // Teresa
//getName2() // Teresa
//call方法调用
//getName.call(school) //ODPS
//getName2.call(school) //Teresa

// 2)不能作为构造函数构造实例化对象
let Person = (name, age) => {
  this.name = name
  this.age = age
}

// let me = new Person('Wei', 37) //Uncaught TypeError: Person is not a constructor

// 3)不能使用arguments变量
let fn = () => console.log(arguments)
//fn(1,2,3) //Uncaught ReferenceError: arguments is not defined

// 4)arrow function的实践与应用场景
let ad = document.getElementById('ad')

// ad.addEventListener('click', function () {
//   //保存this的值
//   console.log(this)// <div id="ad"></div>
//   let _this = this
//   setTimeout(function () {
//     console.log(this) // window
//     _this.style.background = 'lightblue'
//   }, 2000)
// })

// ad.addEventListener('click', function () {
//   setTimeout(() => {
//     console.log(this)
//     this.style.background = 'lightblue'
//   }, 2000)
// })

//箭头函数适合与this无关的回调，定时器，数组方法的回调
//箭头函数不适合与this有关的回调，事件回调，对象的方法

//10.rest参数
//ES5获取实参的方式
// function date() {
//   console.log(arguments)
// }
// date("Teresa", "Isabel", "Cynthia") //arguments是一个对象

//...args是一个形参
// function date(...args) {
//   console.log(args);
// }
//date("Teresa", "Isabel", "Cynthia") //...args是一个数组

const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let data = '数据库中的用户数据'
    resolve(data)
    let error = '数据读取失败'
    reject(error)
  }, 1000)
})

//调用then方法返回的结果是Promise对象，对象状态由回调函数的执行结果决定。
//1.如果回调函数中返回的结果是非Promise类型的属性，状态为成功，返回值为对象的成功的值
const result = promise.then(function (data) {
  console.log(data);
  //1.非promise类型的属性
  // return 'iloveyou'
  //2.是promise类型
  // return new Promise((resolve,reject) => {
  //   reject('error')
  //   //resolve('ok'))
  // })
  //3.抛出错误
  throw new Error('出错了！')
}, function (error) {
  console.error(error);
})

console.log(result);

//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// function isEmpty(obj) {
//   for (let key in obj) return "非空对象"
//   return "空对象"
// }

// let schedule = {}
// console.log(isEmpty(schedule))
// schedule["7:30"] = "get up"
// console.log(isEmpty(schedule))

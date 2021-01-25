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
  console.log(this.name);
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
let fn = () => console.log(arguments);
//fn(1,2,3) //Uncaught ReferenceError: arguments is not defined

let ad = document.getElementById('ad')

ad.addEventListener('click', function () {
  setTimeout(function () {
    console.log(this);
    this.style.background = 'lightblue'
  }, 2000)
})
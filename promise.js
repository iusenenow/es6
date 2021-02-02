//const fs = require('fs')

//回调函数的形式
// fs.readFile('./content.md', (err, data) => {
//   //如果出错，则抛出错误
//   if (err) throw err
//   //输出文件内容
//   console.log(data.toString());
// })

//Promise形式
// let promise = new Promise((resolve, reject) => {
//   fs.readFile('./content.m', (err, data) => {
//     //如果出错
//     if (err) reject(err)
//     //如果成功
//     resolve(data)
//   })
// })

//调用then
//promise.then(data => console.log(data.toString()), error => console.log(error))

//Promise的状态
//[PromiseState]
//Pending, fullfilled, rejected

//Promise对象的值
//[PromiseResult]保存对象[成功/失败的结果]
//resolve, reject

//let promise = Promise.resolve('555')
//如果传入的参数为非Promise类型的对象，则返回的结果为成功promise对象
//如果入的参数为Promise类型的对象，则参数的结果决定了resolve的结果

//Promise封装
//声明构造函数
function Promise(executor) {
  //添加属性
  this.PromiseState = 'pending'
  this.PromiseResult = null
  //声明属性
  this.callbacks = []
  //保存实例对象的this的值
  const _this = this

  //resolve函数

  function resolve(data) {
    //判断状态
    if (_this.PromiseState !== 'pending') return
    //1.修改对象的状态(promiseState)
    _this.PromiseState = 'fulfilled'
    //2.设置对象的结果值(promiseReuslt)
    _this.PromiseResult = data
    //调用成功的回调函数
    _this.callbacks.forEach(item => item.onResolved(data))
  }

  //reject函数
  function reject(data) {
    //判断状态
    if (_this.PromiseState !== 'pending') return
    //1.修改对象的状态(promiseState)
    _this.PromiseState = 'rejected'
    //2.设置对象的结果值(promiseReuslt)
    _this.PromiseResult = data
    //调用失败的回调函数
    _this.callbacks.forEach(item => item.onRejected(data))
  }

  try {
    //同步调动【执行器函数】
    executor(resolve, reject)
  } catch (error) {
    //修改promise对象状态为【失败】
    reject(error)
  }
}

//添加then方法
Promise.prototype.then = function (onResolved, onRejected) {
  //调用回调函数 PromiseState
  if (this.PromiseState === 'fulfilled') {
    onResolved(this.PromiseResult)
  }
  if (this.PromiseState === 'rejected') {
    onRejected(this.PromiseResult)
  }
  //判断pending状态
  if (this.PromiseState === 'pending') {
    //保存回调函数
    this.callbacks.push({
      onResolved,
      onRejected
    })
  }
}

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('OK')
    reject('error')
    //throw "error" //抛出异常
  }, 1000)
})

p.then(data => console.log(data), error => console.warn(error))
p.then(data => console.log(data), error => console.warn(error))
p.then(data => console.log(data), error => console.warn(error))

console.log(p);
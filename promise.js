const fs = require('fs')

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
//Pending, resolved / fullfilled, rejected

//Promise对象的值
//[PromiseResult]保存对象[成功/失败的结果]
//resolve, reject
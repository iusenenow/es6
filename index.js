//let经典案例实践
let items = document.getElementsByClassName('item')

//遍历并绑定事件
for (let i = 0; i < items.length; i++) {
  items[i].onclick = function () {
    console.log(this);
    //this.style.background = 'coral'
    items[i].style.background = 'coral'
  }
  console.log(i);
}
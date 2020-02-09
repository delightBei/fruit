export default {

  //这里设置初始值的作用是：当浏览器关闭，再次打开时获取缓存数据。
  
  //购物车的json数据，如果localStorage.cart里面有数据就读取缓存中的数据，否则设置初始值为：[]
  
  
  cartData:localStorage.cart!=undefined?JSON.parse(localStorage.cart):[],
  
  
  //缓存中有商品总价就读取,否则设置初始值为：0
  
  priceTotal:localStorage.priceTotal!=undefined?localStorage.priceTotal:0,
  
  
  //缓存中有运费就读取,否则设置初始值为：0
  
  freightTotal:localStorage.freightTotal!=undefined?localStorage.freightTotal:0
  
  }
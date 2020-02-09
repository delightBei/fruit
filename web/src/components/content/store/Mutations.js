export default {

  addCartData(state,data) {//添加购物车
  
  state.cartData=localStorage.cart!=undefined?JSON.parse(localStorage.cart):[];
  
  state.priceTotal=parseFloat(localStorage.priceTotal).toFixed(2);
  
  state.freightTotal=parseFloat(localStorage.freightTotal).toFixed(2);
  
  if(data.gid!='' && data.gid>0) {
  
  let existGid=false,priceTotal=0,freightTotal=0,aFreight=[];
  
  for(let i=0;i<state.cartData.length;i++) {
  
  //如果购物车商品有重复修改数量和价格
  
  if (data.gid == state.cartData[i].gid) {
  
  state.cartData[i].amount++;
  
  state.cartData[i].price+=state.cartData[i].price;
  
  state.cartData[i].attrs=data.attrs;
  
  existGid=true;
  
  break;
  
  }
  
  }
  
  //增加购物车商品
  
  if(existGid==false){
  
  state.cartData.push(data);
  
  }
  
  //计算总价
  
  for(let i=0;i<state.cartData.length;i++) {
  
  priceTotal += (state.cartData[i].price * state.cartData[i].amount);
  
  aFreight.push(state.cartData[i].freight);
  
  }
  
  freightTotal=Math.max.apply(null,aFreight);
  
  //console.log(JSON.stringify(state.cartData))
  
  state.priceTotal=priceTotal.toFixed(2);
  
  state.freightTotal=freightTotal.toFixed(2)
  
  localStorage.cart=JSON.stringify(state.cartData);
  
  localStorage.priceTotal=priceTotal.toFixed(2);
  
  localStorage.freightTotal=freightTotal.toFixed(2);
  
  }
  
  }
  
  
  }
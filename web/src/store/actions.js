export default {
  addCart(context,payload){
    // 1 查找相同id
    let oldproduct = context.state.cartList.find(item => item.gid === payload.gid)

    if (oldproduct) {
      // oldproduct.count += 1
      context.commit('addCounter',oldproduct)
    } else {
      payload.count = 1
      context.commit('addToCart',payload)
    }
    
  }
}
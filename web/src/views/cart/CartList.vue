<template>
  <div class="cart-list w-100">
    <div class="w-100 text-center mt-3 top">
      <h2 class="text">已选购</h2>
    </div>
    <div v-for="index in cartList" :key="index.gid" class="w-100 cartlist bg-white mt-2">
      <img :src="index.icon" class="icon">
     <span class="name">{{index.name}}</span>
     <button class="del" @click="del(index)">不要了</button> 
     <h3 class="price">单价：￥{{index.price}}.00</h3>
     <h4 class="count">
       已购数量：<button @click="sub(index)" :disabled = "index.count <=1" class="buttonuse">-</button>&nbsp;{{index.count}}&nbsp;<button @click="add(index)" class="buttonuse">+</button>
      </h4>
      <!-- <button>删除</button> -->
    </div>

    <div class="allprice">
     <div v-if="cartList.length">
       <h3 class="money">总价：￥{{allprice}}.00</h3>
       </div> 
      <h3 class="money" v-else>购物车空空的，再看看吧</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "CartList",
  computed: {
    ...mapGetters(['cartList']),
      allprice() {
      let allprice = 0 ;
      for (let i = 0; i< this.$store.state.cartList.length; i++ )
      allprice += this.$store.state.cartList[i].price * this.$store.state.cartList[i].count
      return allprice
    }
  },
  methods:{
    add(index){
      index.count ++
    },
    sub(index){
      index.count--
    },
    del(index){
      this.$store.state.cartList.splice(index,1)
    }
  },
}
</script>

<style scoped>
.icon{
  width: 8rem;
  margin: 2rem;
}
.cartlist{
  border-bottom: 0.1rem solid black; 
  height: 12rem;
  float: left;
  position: relative;
}
.top{
  background: burlywood;
  height: 4rem;
}
.text{
  position: relative;
  top: 1.5rem;
}
.name{
  position: relative;
  left: 3rem;
  bottom: 10rem;
}
.price{
  position:absolute;
  left: 18rem;
  top: 6rem;
  color:red;
}
.count{
  position:absolute;
  left: 18rem;
  top: 8.5rem;
}
.buy{
  background: white;
  position:fixed;
  height: 5.5rem;
  bottom:3rem;
  left:0;

}
.del{
  position: absolute;
  top: 3rem;
  right: 8rem;
}
.allprice{

  background:white;
  position:fixed;
  height: 5.5rem;
  bottom:3rem;
  width: 60%;
  float: left;
}
.money{
  color: rgba(255, 208, 0, 0.938);
  margin: 1.8rem
}
.buttonuse{
  width: 1rem;
}
</style>
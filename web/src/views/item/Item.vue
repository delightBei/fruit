<template>
<div class="w-100"> 
  <nav-bar></nav-bar>
  <div class="page-article" v-if="model">
    <div class="img w-100">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" :src="model.icon" alt>
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" :src="model.img" alt>
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" :src="model.image" alt>
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>
    </div>
    <div class="d-flex m-2 flex-wrap">

      <div class="price w-100 text-left">
        <span class="itemprice"> ￥{{model.price}}.00</span>

      </div>
      <div class="flex-1 py-3 text-info itemname w-100">
        <h2 class="ml-2">{{model.name}}</h2>
      </div>
       <div class="present w-100">
        <span>详细介绍：{{model.present}}</span>
      </div>
    <div class="show mt-4 w-100">
      <img class="w-100" :src="model.icon" alt>
      <img class="w-100" :src="model.img" alt>
      <img class="w-100" :src="model.image" alt>
    </div>
     
    </div> 

    <div class="buy w-100 flex">
      <div class="flex-1 m-3 ">
      <span class="iconfont icon-icon-test talk"></span>
     <div>客服</div>
      </div>
       <div class="flex-1 m-3 home">
      <span class="iconfont icon-shopping homeicon "></span>
     <div class="homefont">更多</div>
      </div>
    <div class="gotoCard" @click="addToCart">
      <h2 class="buytext">加入购物车</h2>
    </div>
    <router-link tag="div"
     :to="`/pay`"
       class="gotoBuy">
      <h2 class="buytext">立即购买</h2>
    </router-link>
    </div>

  </div>

</div>
</template>

<script>
import { mapMutations,mapActions } from 'vuex'
export default {
  props: {
    id: { required: true }
  },
  data(){
    return {
      model: null,
      // fruitlist: [{
      //   id:this.model._id,
      //   num:1,
      //   url:this.model.icon,
      //   name:this.model.name,
      //   price:this.model.price
      // }],
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      },
    }
  },
  methods:{
    async fetch(){
      const res = await this.$http.get(`items/${this.id}`)
      this.model = res.data
    },
    addToCart(){
      const card = {}
        card.price=this.model.price,
        card.name=this.model.name,
        card.icon=this.model.icon,
        card.freightTotal=null,
        card.gid=this.model._id,
        card.checked=true,
      this.$store.dispatch('addCart',card)
      localStorage.setItem('cart',JSON.stringify(card));
      
    },
  },
  created(){
    this.fetch()
  }
}
</script>

<style scoped>
.img{
  height: 30%;
  display: flex;
}
.price{
  background: white;
  flex-wrap: wrap;
  color: red;
  height: 6rem;
}
.itemprice{
  position: relative;
  top: 30px;
  font-size: 4rem;
}
.itemname{
  background: white;
  margin-top: 1rem;
  line-height: 2rem;
}
.buy{
  background: white;
  position:fixed;
  height: 5.5rem;
  bottom:3rem;
  left:0;
}
.present{
  background:white;
  height: 3rem;
  margin-top: 1rem; 
}
.talk{
  font-size: 2rem;
  display: inline;
}
.home{
  display: inline;
  position: relative;
  bottom: 48px;
  left: 4rem;
}
.homeicon{
  font-size: 2.5rem;
  
}
.homefont{
  margin-left: 17px;
  margin-bottom: 20rem;
  position: relative;
  top: -2px
}
.gotoCard{
  background:yellow;
  position:fixed;
  height: 5.5rem;
  bottom:3rem;
  left:40%;
  width: 30%;
}
.gotoBuy{
  background:red;
  position:fixed;
  height: 5.5rem;
  bottom:3rem;
  left:70%;
  width: 30%;
}
.buytext{
  margin-top:1.5rem; 
  margin-left: 0.3rem; 
}
</style>
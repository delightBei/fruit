<template>
  <div class="cart w-100" >
    <nav-bar>
      <slot>阿贝の购物车</slot>
    </nav-bar>
      <CartList></CartList>
      <div class="pay w-100">
     <router-link tag="div"
     :to="`/pay`" 
      class="gotopay">
       <div class="paytext">
        去结算 
       </div>
       
     </router-link> 
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartList from './CartList'

export default {
  name: "Cart",
  components: {
    CartList
  },
  computed:{
   ...mapGetters(['cartList'])
  }
}

</script>

<style scoped>
.pay{
  position:fixed;
  height: 5.5rem;
  bottom:3rem;
  left:0;
}
.gotopay{
  background: red;
  height: 5.5rem;
  width: 40%;
  float: right;
}
.paytext{
  font-size: 2rem;
  color:white;
  margin: 1.7rem
}
</style>

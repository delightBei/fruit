<template>
  <div id="home">
    <nav-bar></nav-bar>
    <Swiper></Swiper>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import Swiper from '../../components/common/swiper/Swiper'
export default {
    name: "home",
    components: {
      NavBar,Swiper
    }
}
</script>
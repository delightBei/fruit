<template>
    <div class="nav-bar">
        <router-link tag="div" :to="`/home`" class="left" >
            <div class="back">
            <span class="iconfont icon-icon-test2 back"></span>
            </div>
        </router-link>
        <div class="center"><span class="web-font text-center"><slot>阿贝の水果店</slot></span></div>
        <router-link tag="div" :to="`/cart`" class="right">
            <i class="iconfont icon-shopping-cart gocard" ></i>
        </router-link> 
    </div>
</template>


<script>
export default {
    name:"NavBar"
}
</script>

<style scoped>
    @font-face {
    font-family: 'webfont';
    font-display: swap;
    src: url('webfont.eot'); /* IE9 */
    src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('webfont.woff2') format('woff2'),
    url('webfont.woff') format('woff'), /* chrome、firefox */
    url('webfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('webfont.svg#webfont') format('svg'); /* iOS 4.1- */
}
    .web-font {
    font-family: "webfont" !important;
    font-size: 2rem;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 2rem;
    position: relative;
    top: 1.3rem;
    left: 2rem;
}
    .nav-bar{
        display: flex;
        height: 50px;
    }
    .left,.right{
        width: 15%;
        /* background: crimson; */
    }
    .center{
        flex:1;
        background: sandybrown;
    }
    .icon {
  width: 1rem;
  height: 1rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
    .back{
        margin-top: 1rem;
        margin-left: 5px; 
        font-size: 2.5rem;
    }
    .gocard{
        font-size: 2.5rem;
        margin-left: 1rem;
        position: relative;
        top: 1rem
    }
</style>>

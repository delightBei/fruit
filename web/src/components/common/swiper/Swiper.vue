<template>
<div class="swiper">
    <swiper>
        <swiper-slide>
            <img class="fruit-home-swiper" src="../../../assets/img/swiper/apple.png">
        </swiper-slide>
        <swiper-slide>
            <img class="fruit-home-swiper" src="../../../assets/img/swiper/chelizi.png">
        </swiper-slide>
        <swiper-slide>
            <img class="fruit-home-swiper" src="../../../assets/img/swiper/草莓.png">
        </swiper-slide>
    </swiper>
</div>   
</template>

<script>
export default {
    name: "vueswiper"
}
</script>

<style scoped>
.swiper{
    width: 100%;
    height: 100px;
}
.fruit-home-swiper{
    width: 100%;
}
</style>
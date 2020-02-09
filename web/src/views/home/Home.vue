<template>
  <div id="home">
    <nav-bar>
      <slot name="center"></slot>
    </nav-bar>
     <swiper :options="swiperOption">
      <swiper-slide>
        <router-link tag="div"
        :to="`/items/5e170901a1aec8366c346525`" >
        <img class="w-100" src="../../assets/img/swiper/草莓.png" alt>
        </router-link>
      </swiper-slide>
      <swiper-slide>
          <router-link tag="div"
        :to="`/items/5e2ff234e312583b34a3a8f7`" >
        <img class="w-100" src="../../assets/img/swiper/chelizi.png" alt>
          </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link tag="div"
        :to="`/items/5e312aa52d94ee3be0bf4f80`" >
        <img class="w-100" src="../../assets/img/swiper/apple.png" alt>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>

    <f-list-card icon="barrage_fill" title="文章资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link
        tag="div"
        :to="`/articles/${news._id}`" 
        class="py-2 fs-lg"  v-for="(news,i) in category.newsList" :key="i">
          <span class="text-info ml-2">[{{news.categoryName}}}]</span>
          <span>|</span>
          <span class="ml-2">{{news.title}}</span>
        </router-link>
      </template>
    </f-list-card>

    <f-card icon="barrage_fill" title="精选产品" >
      <router-link tag="div"
        :to="`/items/${item._id}`" 
      class="flex-1 item " 
      v-for="(item,i) in items" :key="i"
      >
        <img :src="item.icon" class="w-100">
        <h1 class="fs-lg text-center pt-3">{{item.name}}</h1>
  
      </router-link>
    </f-card>
  </div>
</template>

<script>
export default {
    data(){
      return{
            swiperOption: {
        pagination: {
          el: ".pagination-home"
        },
            autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      },
      
      newsCats: [],
      items: []
      };
    },
    name: "home",
 
    methods: {
      async fetchNewsCats(){
        const res = await this.$http.get('news/List')
        this.newsCats = res.data  
      },
      async fetchNewsItems(){
        const res = await this.$http.get('items/List')
        this.items = res.data
      }
    },
    created(){
      this.fetchNewsCats()
      this.fetchNewsItems()
    }
}
</script>

<style scoped>

 .nav-item{
   margin-left: 20%
 }
 .item{
   margin-bottom: 50px
 }

</style>
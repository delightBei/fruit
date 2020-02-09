<template>
<div> 
  <nav-bar></nav-bar>
  <div class="page-article" v-if="model">
    <div class="d-flex m-2">
      <div class="flex-1 py-3 text-info text-center title ">
        <h2>{{model.title}}</h2>
      </div>

     
    </div> 
    <div v-html="model.body" class="fs-lg p-3 w-100">
      
      </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  data(){
    return {
      model: null
    }
  },
  methods:{
    async fetch(){
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  created(){
    this.fetch()
  }
}
</script>

<style scoped>
.title{
  line-height: 2rem;
}
</style>
<template>
<div>
 <nav-bar></nav-bar>
  <div class="my w-100">
    <img src="./background.jpg" alt class="background w-100">
    <div>
      <img src="./me.jpg" class="me">
    </div>
    <f-card icon="icon-test" title="联系作者">
      
      <li class="contact"><span class="iconfont icon-icon-test2"></span>&nbsp;  email ： 1584538961@qq.com</li>
      <li class="contact"><span class="iconfont icon-icon-test5"></span>&nbsp;&nbsp;git : https://github.com/delightBei</li>
      <li class="contact"><span class="iconfont icon-icon-test6"></span>&nbsp;wechat ：delight19960715</li>
      <li class="contact"><span class="iconfont icon-icon-test4"></span>&nbsp;weibo ：@大爱菌</li>
    </f-card>

  </div>
</div>
</template>

<style scoped>
.my{
  display: block;
  
  height: 30rem;
}
.me{
  position:absolute;
  left: 40%;
  top: 5rem;
  height: 9rem;
  border-radius: 9rem;
}
.contact{
  margin: 1rem
}

</style>
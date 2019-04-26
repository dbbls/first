<template>
  <div id="app">
   <HNav/>
    <router-view/>
  </div>
</template>
<script>
import HNav from '@/components/HNav.vue' 
export default {
  components:{
    HNav
  }
}
</script>
<style lang="less">
*{
  margin:0;
  padding: 0;
}
html,body{
  height: 100%;
}
a{
  text-decoration: none;
  color: #666;
}
.container{
  position:fixed;
  width: 100%;
  height: 100%;
  bottom: 56px;
  overflow-y:auto
}

</style>

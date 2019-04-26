<template>
    <div id="nav">
      <router-link exact to="/">
        <i class="iconfont icon-shouye-"></i>
        <span>首页</span>
      </router-link>
       <router-link to="/about">
        <i class="iconfont icon-Group-"></i>
        <span>列表</span>
      </router-link>
       <router-link to="/my">
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
      </router-link>
       <router-link to="/You">
        <i class="iconfont icon-user"></i>
        <span>我的</span>
      </router-link>
      <!-- // <router-link to="/">Home</router-link> 
      // <router-link to="/about">About</router-link> 
      //  <router-link to="/my">跳转到my</router-link>  -->

    </div>
</template>
<style lang="less" scoped> //不会影响其他地方
    #nav{
  position: fixed;
  justify-content: center;
  align-items: center;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 56px;
  border-top: 1px solid skyblue;
  a{
    flex: 1;
    text-align:center;
    display: flex;
    flex-direction: column;
    &.router-link-active{
      color: red
    }
    i{
      font-size: 26px
    }


  }
}
</style>

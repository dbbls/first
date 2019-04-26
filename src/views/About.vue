<template>
  <div class="about">
    <div class="container" @scroll="sLoadM" ref="eleScr">
      <ul class="uls">
        <router-link v-for="item in pagelist" :key="item.id" tag='li' :to="{name:'detail',params:{id:item.id}}" >
          <img :src="item.img" alt="">
          <p>{{item.name}}</p>
          <p>{{item.info}}</p>
          <p>{{item.price}}$</p>
        </router-link>
      </ul>
      <div class="btnbox">
      <button class="btn"  @click="loadMore">{{hasMore?'点击加载更多':'么有更多了'}}</button>
      </div>
    </div>
  </div>
</template>
<script>
import {getPage} from '../api'
export default {
  name:"about",
  data(){
    return{
      page:0,
      pagelist:[],
      hasMore:true
    }
  },
  created(){
    this.getList(this.page)
  },
  methods: {
    async getList(page){
      let{data:{hasMore,pagedata}} = await getPage(this.page)
      //要把庲的数据和重写请求的数据放在一起，这样才是所有的数据
      this.pagelist = [...this.pagelist,...pagedata]
      this.hasMore = hasMore
  },
  //滚动加载更多
  sLoadM(){
    clearTimeout(this.timer)
    this.timer = setTimeout(()=>{
       let {clientHeight,scrollTop,scrollHeight}=this.$refs.eleScr;
    if(scrollTop+clientHeight+20>scrollHeight){
        this.loadMore()
    }
    },600)
   
  },
  //加载更多
  loadMore(){
    this.page++;//页数加1
    //如果hasMore为false表示么有更更多了就不在执行请求
    if(!this.hasMore)return
    this.getList()
  }

  },
}
</script>
<style lang="less" scoped>
.con-items{
  box-sizing: border-box;
  padding: 0 20px;
  li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .btnbox{
    text-align: center;
  }
  .btn{
    display: inline-block;
    outline: none;
    appearance: none;
    width: 200px;
    height: 60px;
    line-height: 60px;
  }
}
  
</style>
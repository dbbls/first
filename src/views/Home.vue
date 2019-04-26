<template>
  <div class="home">
   
    <div class="container" v-if="zy">
      <div class="spinner">
  <div class="rect1"></div>
  <div class="rect2"></div>
  <div class="rect3"></div>
  <div class="rect4"></div>
  <div class="rect5"></div>
</div>
    </div>
<template v-else>
  <Banner :swiperSlides='sliders'></Banner>
             <div>
      <ul>
        <li v-for="item in homelist" :key='item.id'>
          <img :src="item.img" alt="">
          <p>{{item.name}}</p>
          <p>{{item.info}}</p>
          <p>{{item.price}}</p>
        </li>
      </ul>
    </div>
</template>
           
    
  
           
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Msg from '@/components/Msg.vue'  //1.引入
import My from '@/views/My.vue'
import You from '@/views/You.vue' 
import {getBanner,getHomeList, getHomeALL, getHomeAll} from '../api'
import Banner from '@/components/Banner.vue'

export default {
  name: 'home',
  data(){
    return{
      sliders:[],
      homelist:[],
      zy:true

    }
  },
// async created() {
//   let   {data:homelist} = await getHomeList();
//    this.homelist = homelist;
//     console.log(this.list )
// },
async created(){
      this.getsLider()
      this.getsLide()
  },
methods:{
  //轮播
  async getsLider(){
     let{data:sliders} = await getBanner();
     this.sliders = sliders;
  },
  //列表

  async getsLide(){
   let {data:homelist} = await getHomeList();
   this.homelist = homelist;
   },
},
  // created() {
  //   getBanner().then(res=>{
  //     let{data}=res;
  //     this.sliders=data
  //   })  第一种方法
  // },
  // data(){
  //   return{
  //     val:'12345',
  //     b:'123'
      
  //   }
  // },
  components: {
       Msg, //2.注册
       My,
       You,
       Banner
  
},
created(){
  this.getAll()
},
methods:{
  async getAll(){
    let [{data:sliders},{data:homelist}] = await getHomeAll()
    this.sliders=sliders;
    this.homelist = homelist;
    //数据都拿到了
    setTimeout(()=>{
      this.zy=false
    },1000)

  }
}
}
</script>
<style lang="less">
.spinner {
  margin: 100px auto;
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 10px;
}
 
.spinner > div {
  background-color: #67CF22;
  height: 100%;
  width: 6px;
  display: inline-block;
   
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}
 
.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
 
.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
 
.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
 
.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
 
@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
  20% { -webkit-transform: scaleY(1.0) }
}
 
@keyframes stretchdelay {
  0%, 40%, 100% { 
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% { 
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
  
</style>

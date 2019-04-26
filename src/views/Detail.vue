<template>
    <div>详情页
    <img :src="single.img" alt="">
    <p>{{single}}</p>       
    </div>
</template>
<script>
import {getDetail} from '../api'
export default {
    name:'detail',
    data(){
       return {
           single:{

           },
       }
    },
    created() {
        this.Detail()
    },
    computed:{
        deId(){
            return this.$route.params.id
        }

    },
    methods:{
        //发送详情请求
        async Detail(){
            let {data} = await getDetail(this.deId)
            this.single = data;
            if(JSON.stringify(this.single)=='{}'){
                this.$route.push('./about')
            }
        }
    }
}
</script>
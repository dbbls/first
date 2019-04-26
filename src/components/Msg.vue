<template>
    <div>
        <span>{{msg}}</span>    
        <span>我来自传值{{abc}}</span>  
    </div>
</template>
<script>
export default {
    props:{
        abc:{
            default:()=>([12223])
        }
    },

    data(){
        return{
            msg:'ddddddddddddddddbbls'
        }
    }
}
</script>
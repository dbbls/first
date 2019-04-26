<template>
    <div>
        <span>{{my}}</span>
        <span>{{a}}</span>
        BBB
   
    </div>
</template>
<script>
export default {
       props:{
        a:{
            default:()=>(['CCC'])
        }
    },
    data(){
        return{
            my:'AAA'
        }
    }
}
</script>
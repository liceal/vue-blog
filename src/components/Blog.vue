<template>
    <div id="app" class="home">
        <div class="main">
            <blog-part></blog-part>
        </div>
    </div>
</template>

<script>
import blogPart from './Blog-part'
export default {
    name:'blog',
    data(){
        return{
            
        }
    },
    components:{
        blogPart,
    }
}
</script>

<style>
body{

}
.home{
    
}
.main{
    /* width: 100%; */
    margin: 0 auto;
}
</style>

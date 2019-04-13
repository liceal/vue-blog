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
/* background: url("./../assets/Home.png") no-repeat center top fixed;
background-size: cover; 
margin: 0px;
padding: 0px; */
}
.home{
    /* background-color:rgba(66, 66, 66, 0.3); */
}
.main{
    margin: 0 auto;
}
</style>

<template>
    <div>
        <header class="head">
            <h1 class="head_title">
                <a href="/"><img class="head_img" src="./../assets/userimg.jpg" /></a>
                <a href="/">Liceal 的博客</a>
            </h1>
            <p class="slogan">{{slogan}}</p>
        </header>
    </div>
</template>

<script>
export default {
    name:'blog-head',
    data(){
        return{
            slogan:'怀念那个孤傲的时代，虽有悲情，但灿烂精彩!'
        }
    }
}
</script>

<style scoped>
.head{
    /* height: 500px; */
    text-align: center;
    font-weight: bold;
    margin-top: 50px;
    width: 100%;

}
.head_title{
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    display: flex;
    align-items:center;
    justify-content:center;
}
.head_title img{
    width: 50px;
    height: 50px;
    margin-right: 10px;
}
.head_title >a{
    position:relative;
    line-height: -50px;
    color: white;
    text-decoration: none;
}
.head_title >a:hover{
    text-decoration: underline;
}
.slogan{
    color: #5f5e5e;
    font-size: 15px;
}
</style>

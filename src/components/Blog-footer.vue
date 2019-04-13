<template>
    <div class="main">
        <hr/>
        <div class="slogan">
            <p><a href="/">Liceal 的博客</a> © 2019</p>
            <p>{{slogan}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"blog-footer",
    data(){
        return{
            slogan:"一个很笨犹豫又固执的人，才明白努力是真正的信仰！"
        }
    }
}
</script>

<style scoped>
.main{
    margin-top: 50px;
    width: 100%;
    height: 100px;
    /* background-color: #ccc; */
}
hr{
    background-color: #ccc;
    height: 1px;
}
.slogan{
    color: #FFF8DC;
    text-align: center;
}
.slogan>p>a{
    color: #FFF8DC;
}
</style>

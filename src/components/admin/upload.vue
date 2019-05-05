<template>
    <div class="main">

        <el-upload
        class="upload-demo"
        drag
        :action="serverImgUrl"
        :on-preview="handlePreview"
        :on-success="handleUpload"
        :on-remove="handleRemove"
        :file-list="fileList"
        list-type="picture"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
        </el-upload>

        <el-dialog
        :visible.sync="visible_dialog"
        width="30%"
        center
        append-to-body>
            <!-- <p v-html="content"></p> -->
            <img :src="show_img_url" alt="图片" style="width:100%;">
        </el-dialog>
    </div>
</template>

<script>
import config from '../config.json'

const fileList = []

export default {
    name:'upload',
    data(){
        return{
            'serverImgUrl':config['serverImgUrl'],
            visible_dialog:false,
            show_img_url:'',
            fileList,
            base64:'',
        }
    },
    created(){
        this.getImgAll();
    },
    methods:{
        getImgAll(){
            //开始请求所有图片信息
            this.$http.get( 
                config['serverImgUrl'],
            ).then(Response=>{
                console.log('获取所有数据成功')
                console.log(Response)
                this.fileList = Response.data
            }).catch(e=>{
                console.log(e)
            })
        },
        getBase64(file) {
            //传入附件信息，返回base64字符串
            return new Promise(function(resolve, reject) {
                let reader = new FileReader();
                let imgResult = "";
                reader.readAsDataURL(file);
                reader.onload = function() {
                    imgResult = reader.result;
                };
                reader.onerror = function(error) {
                    reject(error);
                };
                reader.onloadend = function() {
                    resolve(imgResult);
                };
            });
        },
        getFile(file, fileList) {
            //传入附件信息，返回base64字符串
            this.getBase64(file.raw).then(res => {
                this.base64 = res
                //在图片转换成字符串后 再执行更新列表请求
                this.handleChange(file,fileList,'upload');
                return res;
            });
        },
        handleChange(file, fileList, status) {
            //更新图片列表
            console.log("更新图片列表");
            //console.log(file);
            this.$http.post(
                config['serverImgUrl'],
                {
                    fileList:fileList,
                    file:file,
                    base64:this.base64,
                    status:status
                },
                {emulateJSON:true}
            ).then(Response=>{
                console.log("请求成功")
                console.log(Response)
                this.getImgAll();//请求成功后，重新获取请求更新图片列表
            }).catch(e=>{
                console.log("请求失败")
                console.log(e)
            })
        },
        handleRemove(file, fileList){
            //删除附件 更新列表
            this.base64 = ''
            this.handleChange(file,fileList,'delete')
        },
        handleUpload(response, file, fileList){
            //添加附件 发送图片base64字符串 更新列表
            this.getFile(file);//更新列表请求在这里面
        },
        handlePreview(file) {
            //点击图片弹出图片信息
            // console.log(file);
            // this.visible_dialog = true;//弹出图片
            this.show_img_url = file['url'];
            this.$message({
                message: file['url'],
                type: 'success'
            });
            // this.$alert('<img src="'+file['url']+'"/>', {
            //     dangerouslyUseHTMLString: true, //编译html代码
            //     closeOnClickModal:true, //点击遮罩处关闭
            //     showConfirmButton:false,//隐藏确认按钮
            //     showClose:false,//隐藏取消按钮
            // }).catch(
            //     () => {}
            // )
        },
        
    }
}
</script>

<style scoped>
.main{
    width: 100%;
    height:450px;
    overflow: auto;
}
</style>

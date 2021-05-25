<template>
  <div id="registerWrapper">
    <div id="registerContent">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用户注册</span>
        </div>
        <div id="registerContentBody">
            <el-input id="newusername" v-model="newUser.newusername" clearable></el-input>
            <el-input id="newpassword" v-model="newUser.newpassword" show-password clearable></el-input>
        </div>
        <!--  v-loading.fullscreen.lock="fullscreenLoading" -->
        <div id="registerSubmit">
            <el-button id="systemSubmit" @click="registerSystem" >注册</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
const url = 'http://localhost:3000'
export default {
  name:"register",
    data(){
        return {
            newUser:{
                newusername:"",
                newpassword:""
            },
            fullscreenLoading: false
        }
    },
    methods:{
      // CORS 
      registerSystem(){     
        // Axios.get(url +'/register',{
        //   params: this.newUser
        // }).then(function(response){
        //   alert(response.data.state + '\n' +response.data.message )
        // })
        // this.fullscreenLoading = true;
        // that = this
        Axios.post(url + '/register',{
          params:this.newUser
        }).then((response)=>{
          console.log(response)
            // if(response.data.state =="success"){
            //   this.$message('注册用户成功');
            // }
            // else{
            //    this.$message('注册用户失败');
            // }         
        })
      }
    }
};
</script>

<style >

#registerWrapper {
  /* background-color: purple; */
  height: 100%;
}
#registerContent{
    width: 400px;
    margin:0 auto;
    padding-top: 100px;
}
#systemSubmit{
    display: block;
    margin: 0 auto;
    background-color: #0a9588;
    color:white;
    border-color: #0a9588;
}
#newpassword{
  margin-top:5px;
  margin-bottom: 8px;
}
</style>

<template>
  <div id="loginWrapper">
    <div id="loginContent">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>系统登录</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >忘记密码</el-button
          >
        </div>
        <div id="loginContentBody">
            <el-input id="username" v-model="user.username" clearable></el-input>
            <el-input id="password" v-model="user.password" show-password clearable></el-input>
        </div>
        <div id="loginSubmit">
            <el-button id="systemSubmit" @click.native="loginSystem">登录</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name:"login",
    data(){
        return {
            user:{
                username:"",
                password:""
            }
        }
    },
    methods:{
      loginSystem(){
        let that = this;
        Axios.get('http://localhost:3000/login',{
          params:this.user
        }).then(function (response){
            alert(response.data.username)
            alert(response.data.password)
            that.$router.push({path:"/work"})
        })
      }
    }
};
</script>

<style>
#loginWrapper {
  /* background-color: purple; */
  height: 100%;
}
#loginContent{
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
#password{
  margin-top:5px;
  margin-bottom: 8px;
}
</style>

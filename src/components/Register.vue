<template>
    <div id="loginWrapper">
        <div id="loginContent">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>用户注册</span>
                </div>
                <div id="loginContentBody">
                    <el-input id="newusername" v-model="newUser.newusername" clearable></el-input>
                    <el-input id="newpassword" v-model="newUser.newpassword" show-password clearable></el-input>
                </div>
                <div id="loginSubmit">
                    <el-button id="systemSubmit" @click="registerSystem">注册</el-button>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'

export default {
    name:"register",
    data() {
        return {
            newUser:{
                newusername:"",
                newpassword:""
            }
        }
    },
    methods: {
        registerSystem(){
            Axios.get('http://localhost:3000/register',{
                params:this.newUser
            })
            .then(function(response){
                alert(response.data)
            })        
        }
    },
}
</script>

<style>
    #loginWrapper{
        /* background-color: purple; */
        height: 100%;
    }
    #loginContent{
        width: 400px;
        margin: 0 auto;
        padding-top: 100px;
    }
    #systemSubmit{
        display: block;
        margin: 0 auto;
        background-color: #0a9588;
        color: white;
        border-color: #0a9588;
    }
    #password{
        margin-top: 5px;
        margin-bottom: 8px;
    }
</style>
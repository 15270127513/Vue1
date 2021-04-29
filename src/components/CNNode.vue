<template>
    <div id="cnnodeWrapper">
        <div id="conndeTitle">
            <span>cnnode论坛</span>
        </div>
        <hr>
        <div id="cnnodeContent">
            <li v-for="(value,index) in this.topicsArr" :key="index">
                <span>
                    <img id="avatar" :src="value.author.avatar_url" alt="">
                </span>
                <span>
                    {{value.title}}
                </span>
            </li>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'

export default {
    data() {
        return {
            topicsArr:[]
        }
    },
    beforeCreate() {
        // console.log("this vue brfore")
    },
    created() {
        let that = this
        // console.log("this vue is running")
        Axios.get('https://cnodejs.org/api/v1/topics').then(function(response){
            // console.log(response.data)
            if(response.data.success){
                that.topicsArr = response.data.data;
            }
        })
    },
}
</script>

<style scoped>
#avatar{
    width: 20px;   
}
</style>>
    

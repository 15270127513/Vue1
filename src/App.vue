<template>
  <div id="app">
    <!-- 3、使用子组件 -->
    <el-container>
      <el-header id="headerBook">
        <Header/>
      </el-header>
      <el-main id="mainBook">          
        <router-view>
        为的
        </router-view>
      </el-main>
      <el-footer id="footerBook">
        <Footer/>
      </el-footer>
    </el-container>
    

  </div>
</template>

<script>
//1、导入header 子组件
import Header from "./components/Header.vue"
import Login from "./components/Login.vue"
import Footer from "./components/Footer.vue"
//2、注册  子组件
export default {
  name: 'App',
  components: {
  Header,
  Login,
  Footer
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
#headerBook{
  background-color: #244152;
}
#mainBook{
  /* background-color: blue; */
  height: 500px;
}
#footerBook{
  /* background-color: green; */
  height: 150px  !important;
}
</style>



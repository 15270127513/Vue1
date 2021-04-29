<template>
  <div id="app">
   <!--3.使用子组件-->
   <el-container> 
     <el-header id="headerbook">
       <Header/>
     </el-header>
   <el-main id="mainbook">
       <!-- <Login/> -->
       <router-view>x</router-view>
   </el-main>
   <el-footer id="footerbook">
      <Footer/> 
   </el-footer>
   </el-container>
  </div>
</template>

<script>
//1.导入Header 子组件
import Header from "./components/Header"
import Login from "./components/Login"
import Footer from "./components/Footer"
//2.注册 子组件
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
#headerbook{
  background-color: #244152;
}
#mainbook{
  /* background-color: blue; */
  height: 500px;
}
#footerbook{
  /* background-color:green; */
  height: 150px  !important;
}
</style>
<template>
  <div id="bookWrapper">    
      <div id="title">
        图书库存情况
      </div>
      <div id="bookDetail">
      </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name:"book",
  mounted() {
    var myChart = echarts.init(document.getElementById("bookDetail"));
    // 绘制图表
    myChart.setOption({
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: ["Java", "Python", "C++", "C", "Node.js", "Vue.js"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  },

}
</script>

<style lang="stylus">
#bookWrapper
  background-color:red
  height:500px
  #title
    background-color: blue
    height:200px
  #bookDetail
    height: 300px
</style>
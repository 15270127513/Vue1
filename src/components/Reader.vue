<template>
  <div id="readerWrapper">
    <div id="title">
      <span>我是读者模块</span>
    </div>
    <div id="myChart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "reader",
  mounted() {
    var myChart = echarts.init(document.getElementById("myChart"));
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
  methods: {},
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#readerWrapper {
  // background-color: red;
  height: 500px;

  #title {
    background-color: blue;
    height: 100px;
  }
  #myChart{
    height: 300px;
  }
}
</style>
<template>
  <div ref="echarsCom" :style="{ height: `${height}px`, width: '100%' }"></div>
</template>

<script>
import Echarts from "echarts";
export default {
  data() {
    return {};
  },
  props: {
    height: {
      type: Number,
      default: 300,
    },
  },
  mounted() {
    const myChart = Echarts.init(this.$refs.echarsCom);
    let option1 = {
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option1);
  },
};
</script>
<style scoped lang="scss"></style>

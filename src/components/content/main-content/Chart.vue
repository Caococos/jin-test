<template>
  <div class='chart'>
    <h3>近一年黄金走势</h3>
    <div class="button-all">
      <c-button class="button"></c-button>
      <c-button eType="柱状图"></c-button>
    </div>
    <div class="tip">数据来源：Jin10.com</div>
    <div id="main" style="width: 672px;height:280px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import CButton from 'components/content/main-content/CButton';
export default {
  name: 'chart',
  data() {
    return {
      barData: {
        chart: {
          type: 'column'
        },
        xAxis: {
          data: ['2020/4', '2020/6', '2020/8', '2020/10', '2020/12'],
          axisLabel: {
            color: '#888'
          }
        },
        yAxis: {
          max: 0.9,
          min: -0.9,
          tickInterval: 0.3,
          axisLabel: {
            color: '#888'
          }
        },
        color: '#bbcbfb',
        series: [
          {
            type: 'bar',
            name: 'shares',
            data: [-0.5, 0.4, 0.3, 0.1, -0.6]
          },
          {
            type: 'bar',
            name: 'shares',
            data: [-0.2, -0.3, 0.3, 0.2, -0.1]
          },
          {
            type: 'bar',
            name: 'shares',
            data: [0.3, -0.4, 0.4, -0.2, 0.5]
          },
          {
            type: 'bar',
            name: 'shares',
            data: [0.3, -0.2, 0.1, 0.1, 0.6]
          },
          {
            type: 'bar',
            name: 'shares',
            data: [-0.4, -0.1, 0.4, 0.3, 0.5]
          },
          {
            type: 'bar',
            name: 'shares',
            data: [0.1, -0.5, 0.6, -0.2, - 0.2]
          },
          {
            type: 'bar',
            name: 'shares',
            data: [-0.3, 0.4, -0.4, -0.2, 0.5]
          },
          {
            type: 'bar',
            name: 'shares',
            data: [0.6, -0.5, 0.1, -0.4, 0.2]
          },
          {
            type: 'bar',
            name: 'shares',
            data: [-0.1, 0.2, 0.5, -0.6, 0.1]
          },
          {
            type: 'bar',
            name: 'shares',
            data: [-0.2, -0.3, 0.4, 0.1, 0.3]
          },
        ]
      },
      lineData: {}
    }
  },
  mounted() {
    const myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(this.barData)
  },
  components: {
    CButton
  }
}
</script>

<style scoped>
.chart {
  position: relative;
}
.chart h3 {
  font-size: 18px;
}
.button-all {
  display: flex;
  margin: 29px 0 0 0;
}
.button {
  margin-right: 16px;
}
.tip {
  position: absolute;
  top: 4px;
  right: 0;
  font-size: 10px;
  color: #888;
}
</style>
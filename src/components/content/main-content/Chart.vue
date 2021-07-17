<template>
  <div class='chart'>
    <h3>近一年黄金走势</h3>
    <div class="button-all">
      <c-button :class="['button ', {'button-high': chart === 1}]" @click.native="toLine()"></c-button>
      <c-button :class="{'button-high': chart === 0}" eType="柱状图" @click.native="toBar()"></c-button>
    </div>
    <div class="tip">数据来源：Jin10.com</div>
    <div id="main" style="width: 100%;height:270px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import CButton from 'components/content/main-content/CButton';
export default {
  name: 'chart',
  data() {
    return {
      chart: 0,
      myChart: '',
      barData: {
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
      lineData: {
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
            type: 'line',
            name: 'shares',
            data: [-0.5, 0.4, 0.3, 0.1, -0.6]
          },
          {
            type: 'line',
            name: 'shares',
            data: [-0.2, -0.3, 0.3, 0.2, -0.1]
          },
          {
            type: 'line',
            name: 'shares',
            data: [0.3, -0.4, 0.4, -0.2, 0.5]
          },
          {
            type: 'line',
            name: 'shares',
            data: [0.3, -0.2, 0.1, 0.1, 0.6]
          },
          {
            type: 'line',
            name: 'shares',
            data: [-0.4, -0.1, 0.4, 0.3, 0.5]
          },
          {
            type: 'line',
            name: 'shares',
            data: [0.1, -0.5, 0.6, -0.2, - 0.2]
          },
          {
            type: 'line',
            name: 'shares',
            data: [-0.3, 0.4, -0.4, -0.2, 0.5]
          },
          {
            type: 'line',
            name: 'shares',
            data: [0.6, -0.5, 0.1, -0.4, 0.2]
          },
          {
            type: 'line',
            name: 'shares',
            data: [-0.1, 0.2, 0.5, -0.6, 0.1]
          },
          {
            type: 'line',
            name: 'shares',
            data: [-0.2, -0.3, 0.4, 0.1, 0.3]
          },
        ]
      }
    }
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById('main'));
    this.myChart.setOption(this.barData)
    window.addEventListener("resize", () => {
      this.myChart.resize();
    });
  },
  components: {
    CButton
  },
  methods: {
    toLine() {
      if (this.myChart) {
        this.myChart.setOption(this.lineData)
        this.chart = 1
      }
    },
    toBar() {
      if (this.myChart) {
        this.myChart.setOption(this.barData)
        this.chart = 0
      }
    }
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
.button-high {
  background-color: var(--color-blue-text);
  color: #fff;
}
.tip {
  position: absolute;
  top: 4px;
  right: 0;
  font-size: 10px;
  color: #888;
}
</style>
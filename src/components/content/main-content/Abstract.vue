<template>
  <div class='abstract'>
    <h2>{{title}}</h2>
    <div class="editor">
      <div class="left">
        <img src="~assets/img/头像.png" alt="">
        <span class="editor-n">Skr橙子</span>
        <span class="editor-t">·1小时前</span>
      </div>
      <div class="right">
        <span class="create-i">生成图片
          <i class="iconfont icon-xiangji"></i>
        </span>
        <span class="share">分享文章<i class="iconfont icon-weibo"></i>
          <i class="iconfont icon-qq"></i>
          <i class="iconfont icon-weixin"></i>
        </span>
      </div>
    </div>
    <p class="text">{{content[0]}}</p>
    <p class="text">{{content[1]}}</p>
    <chart class="chart"></chart>
    <p class="text text-high">{{content[2]}}</p>
    <j-vedio></j-vedio>
  </div>
</template>

<script>
import Chart from 'components/content/main-content/Chart';
import JVedio from 'components/content/main-content/JVedio';

export default {
  name: 'abstract',
  data() {
    return {
      title: '挂单报告：黄金上方助力明显 欧美下方有密集支撑',
      content: ['关注挂单报告，从市场的筹码分布出发，解读挂单背后的多空秘密。主要覆盖品种：黄金、原油、英镑、欧元、日元、加元、澳元。数据均来自大型经纪商，仅供参考，不做投资建议。', '标普500指数年内迄今已上涨了逾10%，不过涨势在最近几周却陷入停滞，因交易员们在经济增长前景与通胀威胁间陷入权衡。从石油到木材的原料成本大幅上升、供应链出现瓶颈、劳动力市场趋紧等诸多现象，均加剧了人们对通胀过热的担忧。', '由于头部正极材料企业往往与下游动力电池大厂深度绑定，产有所供，能维持较高的产能利用率，而尾部企业销量少、难盈利，整个行业马太效应进一步凸显。']
    }
  },
  components: {
    Chart,
    JVedio
  }
}
</script>

<style scoped>
.abstract h2 {
  margin-bottom: 31px;
  font-family: var(--font-weight);
}
.editor {
  margin-bottom: 30px;
  height: 30px;
  font-size: 12px;
}
.editor img {
  margin-right: 11px;
  width: 30px;
}
.left,
.right {
  height: 30px;
  display: flex;
  align-items: center;
}
.right {
  color: #888888;
}
.create-i::after {
  height: 22px;
  content: "";
  margin: 0 12px;
  border-right: 1px solid #888;
}
.editor-n {
  color: var(--color-blue-text);
}
.editor-t {
  color: #888;
}
.icon-weibo {
  margin: 0 14px 0 10px;
  color: #e7615b;
}
.icon-qq {
  margin-right: 14px;
  color: #4fa0ea;
}
.icon-weixin {
  color: #6ab74b;
}
.text {
  margin-bottom: 36px;
  color: #787b8a;
  font-size: 14px;
}
.text-high {
  margin-bottom: 40px;
  color: var(--color-blue-text);
  font-size: 15px;
}
.chart {
  margin-top: 26px;
}
</style>
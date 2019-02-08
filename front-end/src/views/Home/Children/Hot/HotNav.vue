<template>
  <div class="hot-nav">
    <!-- 滚动区域 -->
    <div class="hot-nav-content">
      <div class="nav-content-inner">
        <a class="inner-item" v-for="(nav, index) in homenav" :key="index">
          <img :src="nav.iconurl" alt="">
          <span>{{nav.icontitle}}</span>
        </a>
      </div>
    </div>
    <!-- /滚动区域 -->

    <!--自定义进度条-->
    <div class="hot-nav-bottom">
      <div class="hot-nav-bottom-inner" :style="innerBarStyle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotNav',

  data () {
    return {
      homenav: [
        {iconurl: require('../../imgs/nav/nav_icon01.png'), icontitle: '品牌馆'},
        {iconurl: require('../../imgs/nav/nav_icon02.png'), icontitle: '品牌馆'},
        {iconurl: require('../../imgs/nav/nav_icon03.png'), icontitle: '品牌馆'},
        {iconurl: require('../../imgs/nav/nav_icon04.png'), icontitle: '品牌馆'},
        {iconurl: require('../../imgs/nav/nav_icon05.png'), icontitle: '品牌馆'},
        {iconurl: require('../../imgs/nav/nav_icon06.gif'), icontitle: '品牌馆'},
        {iconurl: require('../../imgs/nav/nav_icon07.png'), icontitle: '品牌馆'},
        {iconurl: require('../../imgs/nav/nav_icon08.png'), icontitle: '品牌馆'},
        {iconurl: require('../../imgs/nav/nav_icon09.png'), icontitle: '品牌馆'},
        {iconurl: require('../../imgs/nav/nav_icon10.png'), icontitle: '品牌馆'},
        {iconurl: require('../../imgs/nav/nav_icon11.png'), icontitle: '品牌馆'},
        {iconurl: require('../../imgs/nav/nav_icon12.png'), icontitle: '品牌馆'},
        {iconurl: require('../../imgs/nav/nav_icon13.png'), icontitle: '品牌馆'},
        {iconurl: require('../../imgs/nav/nav_icon14.png'), icontitle: '品牌馆'},
        {iconurl: require('../../imgs/nav/nav_icon15.png'), icontitle: '品牌馆'},
        {iconurl: require('../../imgs/nav/nav_icon16.png'), icontitle: '品牌馆'}
      ],
      // 屏幕的宽度
      screenW: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      // 滚动内容的宽度
      scrollContentW: 720,
      // 滚动条背景的宽度
      scrollBgW: 100,
      // 滚动条的长度
      barWidth: 0,
      // 起点
      startX: 0,
      // 结束点
      endFlag: 0,
      // 小红条移动距离
      barMoveWidth: 0
    }
  },

  computed: {
    innerBarStyle () {
      return {
        width: `${this.barWidth}px`,
        left: `${this.barMoveWidth}px`
      }
    }
  },

  methods: {
    // 获取滚动条的长度
    getBarWidth () {
      this.barWidth = this.scrollBgW * (this.screenW / this.scrollContentW)
    },

    // 移动端事件监听
    bindEvent () {
      // 这里也可以使用$refs，$el
      this.$el.addEventListener('touchstart', this.handleTouchStart, false);
      this.$el.addEventListener('touchmove', this.handleTouchMove, false);
      this.$el.addEventListener('touchend', this.handleTouchEnd, false);
    },

    // 开始触摸
    handleTouchStart (e) {
      // console.log(e.touches);
      // 获取第一个触摸点
      let touch = e.touches[0];
      // 求出起点
      this.startX = Number(touch.pageX);
    },

    // 开始移动
    handleTouchMove (e) {
      // console.log(e.touches);
      // 获取第一个触摸点
      let touch = e.touches[0];
      // 求出触摸点移动距离
      let moveWidth = Number(touch.pageX) - this.startX;
      // 求出滚动条滑动距离,滚动条跟触摸点是相反方向移动
      this.barMoveWidth = -(moveWidth * (this.scrollBgW / this.scrollContentW) - this.endFlag);

      // 边界处理
      if (this.barMoveWidth <= 0) {
        this.barMoveWidth = 0;
      }
      if (this.barMoveWidth >= this.scrollBgW - this.barWidth) {
        this.barMoveWidth = this.scrollBgW - this.barWidth;
      }
    },

    // 结束触摸
    handleTouchEnd (e) {
      // console.log(e.touches);
      this.endFlag = this.barMoveWidth;
    }
  },

  mounted () {
    this.getBarWidth();
    this.bindEvent();
  }
}
</script>

<style lang='scss' scoped>
.hot-nav {
  width: 100%;
  height: 180px;
  position: relative;
  background-color: #fff;
  box-sizing: border-box;
  padding-bottom: 10px;

  .hot-nav-content {
    width: 100%;
    overflow-x: scroll;

    .nav-content-inner {
      width: 720px;
      height: 180px;
      display: flex;
      flex-wrap: wrap;

      .inner-item {
        width: 90px;
        height: 90px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #666666;
      }

      img {
        width: 40%;
        margin-bottom: 5px;
      }
    }
  }

  // 隐藏默认的滚动条
  .hot-nav-content::-webkit-scrollbar {
    display: none;
  }

  // 自定义进度条
  .hot-nav-bottom {
    width: 100px;
    height: 2px;
    background-color: #ccc;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    bottom: 6px;

    .hot-nav-bottom-inner {
      position: absolute;
      left: 0;
      height: 100%;
      background-color: orangered;
      width: 0;
    }
  }
}
</style>

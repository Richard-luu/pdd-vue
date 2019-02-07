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
      <div class="hot-nav-bottom-inner"></div>
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
      ]
    }
  },

  methods: {}
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
    // width: 100%;
    width: 50px;
    height: 2px;
    background-color: #ccc;
    position: absolute;
    left: 50%;
    // margin-left: -50px;
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

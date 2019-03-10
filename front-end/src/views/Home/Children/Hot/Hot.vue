<template>
  <div class="hot">
     <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../imgs/swiper_img/s1.png" alt=""></div>
        <div class="swiper-slide"><img src="../../imgs/swiper_img/s2.png" alt=""></div>
        <div class="swiper-slide"><img src="../../imgs/swiper_img/s3.png" alt=""></div>
        <div class="swiper-slide"><img src="../../imgs/swiper_img/s4.png" alt=""></div>
        <div class="swiper-slide"><img src="../../imgs/swiper_img/s5.png" alt=""></div>
        <div class="swiper-slide"><img src="../../imgs/swiper_img/s6.png" alt=""></div>
        <div class="swiper-slide"><img src="../../imgs/swiper_img/s7.png" alt=""></div>
        <div class="swiper-slide"><img src="../../imgs/swiper_img/s8.png" alt=""></div>
        <div class="swiper-slide"><img src="../../imgs/swiper_img/s9.png" alt=""></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- /轮播图 -->

    <!-- 小导航组件 -->
    <HotNav/>

    <!--广告位-->
    <div class="hot-active">
      <img src="../../imgs/hot_active/home_ad.gif" alt="" width="100%">
    </div>

    <!--商品的列表-->
    <hot-shop-list/>
  </div>
</template>

<script>
//  引入组件
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

import HotNav from './HotNav';
import HotShopList from './HotShopList';

// 使用vuex
import {
  mapState
} from 'vuex';

export default {
  name: 'Hot',

  data () {
    return {
    }
  },
  components: {
    HotNav, HotShopList
  },

  computed: {
    // 这里也可以使用$store.state.reqHomeCasual
    ...mapState(['reqHomeCasual'])
  },

  methods: {},

  mounted () {
    // new Swiper('.swiper-container', {
    //   loop: true, // 循环模式选项

    //   autoplay: true,

    //   // 如果需要分页器
    //   pagination: {
    //     el: '.swiper-pagination'
    //   }
    // });

    // 派发一个动作请求首页轮播数据  后台接口还没写，写了再放出来
    // this.$store.dispatch('reqHomeCasual');
  },

  watch: {
    reqHomeCasual () {
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          loop: true, // 循环模式选项

          autoplay: true,

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          }
        });
      });
    }
  }
}
</script>

<style lang='scss' scoped>
@import 'swiper/dist/css/swiper.min.css';

.hot {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  padding-top: 45px;
}

.swiper-container {
  img {
    width: 100%;
  }
}

.hot-active {
  background-color: #fff;
  margin: 8px 0;
  padding: 5px;
  box-sizing: border-box;
}

</style>

<template>
  <div class="search-nav">
    <a href="" class="search-nav-icon">
      <img src="../imgs/search.png" alt="">
      <span>陆大帅</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SearchNav',

  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
.search-nav {
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px #ccc solid;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  .search-nav-icon {
    text-decoration: none;
    width: 90%;
    height: 70%;
    background-color: #e8e8e8;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 25px;
    }

    span {
      color: #aaa;
      margin-left: 6px;
      font-size: 18px;
      font-weight: lighter;
    }
  }
}
</style>

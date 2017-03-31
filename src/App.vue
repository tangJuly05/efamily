<template>
  <div>
    <v-header></v-header>
    <div class="lifeBar" v-show="showBar">
      <img src="./bar.png">
      <div class="barWord">
        <p>家庭账单</p>
        <p>家庭相册</p>
        <p>聚会动态</p>
      </div>
    </div>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/ground">
          <img src="./ground.png">
          <span>广场</span>
        </router-link>
      </div>
      <div class="tab-item" @click="show">
        <router-link to="/life">
          <img src="./life.png">
          <span>生活</span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/share">
          <img src="./share.png" class="share">
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/chat">
          <img src="./chat.png">
          <span>交流</span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/health">
          <img src="./health.png">
          <span>健康</span>
        </router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
  import header from './components/header/header.vue';
  export default {
    name: 'app',
    components: {
      'v-header' : header
    },
    data() {
      return {
        showBar:false
      };
    },
    methods: {
      show() {
        this.showBar = !this.showBar;
      }
    }
  };
</script>

<style rel="stylesheet/stylus" lang="stylus">
  .lifeBar
    .barWord
      position: absolute;
      bottom: 61px;
      left: 90px;
      font-size: 15px;
      color: #4c4c4c;
      line-height: 40px;
    img
      width: 115px;
      position: absolute;
      bottom: 52px;
      left: 55px;
  .tab
    position: fixed;
    display: flex;
    bottom:0;
    left:0;
    width:100%;
    height:50px;
    border-top:1px solid #e86850;
    background:#fff;
    .tab-item
      flex: 1;
      text-align: center;
      color: #575757;
      & > a
        display: block;
        font-size: 14px;
        &.active
          color: #e86850;
      img
        display:block;
        position: relative;
        left: 50%;
        margin-left: -12.5px;
        margin-top:5px;
        margin-bottom:5px;
        width:25px;
        height:25px;
      .share
        margin-top:7px;
        width:35px;
        height:35px;
</style>

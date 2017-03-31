<template>
  <div class="life">
    <div class="choose">
      <img src="./choose-bar.png" class="chooseBar" v-show="showBar">
      <img src="./choose-icon.png" class="chooseIcon" @click="show">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
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
  .life
    margin-top: 45px;
    .choose
      .chooseBar
        width: 125px;
        position: absolute;
        bottom: 130px;
        right: 65px;
      .chooseIcon
        position: absolute;
        bottom: 70px;
        right: 20px;
        width: 60px;
</style>

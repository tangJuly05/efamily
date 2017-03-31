<template>
  <div>
    <div class="header">
      <img src="./person.png" class="person-pic" @click="showPerson">
      <span class="title">家庭广场</span>
      <img src="./add.png" class="add-pic">
    </div>
    <div class="personal" v-show="personPage">
      <div class="avatar">
        <img src="./avatar.png" >
      </div>
      <div class="userInfo">
        <p class="userName">用户名</p>
        <p class="welcome">欢迎您</p>
      </div>
      <div class="mainFunc">
        <p>
          <img src="./tel.png">
          <span>信 息 簿</span>
        </p>
        <p>
          <img src="./ring.png">
          <span>事 件 提 醒</span>
        </p>
        <p>
          <img src="./message.png">
          <span>留 言 板</span>
        </p>
      </div>
      <div class="exit">
        <p>退出登录</p>
      </div>
    </div>
    <div class="layer" v-show="personPage" @click="closePerson"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data() {
      return {
        personPage:false
      };
    },
    methods: {
      showPerson() {
        this.personPage = true;
        this.$nextTick(function() {
          document.body.style.overflow = 'hidden';
        });
      },
      closePerson() {
        this.personPage = false;
        this.$nextTick(function() {
          document.body.style.overflow = 'auto';
        });
      }
    }
  };
</script>

<style rel="stylesheet/stylus" lang="stylus">
  .header
    position: fixed;
    top:0;
    left:0;
    line-height:45px;
    text-align:center;
    vertical-align: top;
    width:100%;
    height:45px;
    background: #e86850;
    z-index:1;
    .title
      color: #fff;
      font-size:18px;
      font-weight: 700;
      font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    img
      width: 20px;
    .person-pic
      float:left;
      margin:10px 0 0 10px;
    .add-pic
      float:right;
      margin:10px 10px 0 0 ;
  .personal
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    padding:25px;
    width:240px;
    height:100%;
    background:#ed7c67;
    z-index:100;
    color: #fff;
    animation:fromLeft .5s;
    @keyframes fromLeft{
      0%{width:0px}
      100%{width:240px}
    }
    .avatar
      display: inline-block;
      width: 70px;
      height: 70px;
      img
        width:100%;
        height:100%;
        border-radius:50%;
    .userInfo
      display: inline-block;
      margin-top: 10px;
      vertical-align: top;
      text-align: center;
      width: 155px;
      .userName
        font-weight:600;
        margin-bottom:10px;
        font-size: 20px;
      .welcome
        font-size:16px;
    .mainFunc
      margin: 60px 0 0 55px;
      line-height: 70px;
      img
        width:30px;
      span
        vertical-align: super;
        font-size: 18px;
    .exit
      text-align:center;
      margin-top:60px;
  .layer
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    width:100%;
    height:100%;
    background: rgba(0,0,0,0.5);
    z-index:99;
</style>

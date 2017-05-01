<template>
  <div>
    <div class="loginRegister" v-show="loginRegister">
      <div class="input" v-show="!register">
        <form action="">
          <input type="text" name="username" placeholder="请输入用户名"><img src="../static/img/username.png">
          <input type="password" name="password" placeholder="请输入密码"><img src="../static/img/password.png">
          <input type="submit" name="submit" value="登 录" @click="hideRegister">
        </form>
        <p @click="showRegister">点击注册</p>
      </div>
      <div class="input" v-show="register">
        <form action="">
          <input type="text" name="username" placeholder="请输入用户名"><img src="../static/img/username.png">
          <input type="password" name="password" placeholder="请输入密码"><img src="../static/img/password.png">
          <input type="password" name="password" placeholder="请再次确认密码"><img src="../static/img/checkpwd.png">
          <input type="submit" name="submit" value="注 册">
          <p @click="showLogin">已有账号，点击登录</p>
        </form>
      </div>
    </div>
    <v-header></v-header>
    <div class="lifeBar" v-show="showBar">
      <img src="./bar.png">
      <div class="barWord">
        <router-link to="/familyBill"><p>家庭账单</p></router-link>
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
        <router-link to="/familyBill">
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
        showBar:false,
        register:false,
        loginRegister:true
      };
    },
    methods: {
      show() {
        this.showBar = !this.showBar;
      },
      showRegister() {
        this.register = true;
      },
      showLogin() {
        this.register = false;
      },
      hideRegister() {
        this.loginRegister = false;
      }
    }
  };
</script>

<style rel="stylesheet/stylus" lang="stylus">
  .loginRegister{
    position: fixed;
    background: url("../static/img/login_bg.jpg") no-repeat;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-size: 100%;
    .input{
      margin-top: 66%;
      img{
        position: absolute;
        margin: -68px 0 0 56px;
        width: 22px;
      }
      input[name="username"],input[name="password"]{
        display: block;
        margin: 30px auto;
        width: 65%;
        height: 45px;
        border-radius: 40px;
        background: none;
        border: 1px solid #fff;
        font-size: 1rem;
        color: #fff;
        padding-left: 63px;
        outline: none;
      }
      input[name="submit"]{
        margin: 0 9%;
        width: 82%;
        height: 50px;
        background: #fff;
        opacity: 0.5;
        border-radius: 40px;
        color: #ff6508;
        font-size: 1.2rem;
      }
      input::-webkit-input-placeholder{
         color:#e0e0e0;
      }
      p{
        color: #fff;
        text-align: center;
        margin-top: 35px;
        cursor:pointer;
      }
    }

  }
  .lifeBar
    .barWord
      position: absolute;
      bottom: 61px;
      left: 90px;
      font-size: 15px;
      color: #4c4c4c;
      line-height: 40px;
      z-index:2;
    img
      width: 115px;
      position: absolute;
      bottom: 52px;
      left: 55px;
      z-index:2;
  .tab
    position: fixed;
    display: flex;
    bottom:0;
    left:0;
    width:100%;
    height:50px;
    border-top:1px solid #ec8ccb;
    background:#fff;
    .tab-item
      flex: 1;
      text-align: center;
      color: #575757;
      & > a
        display: block;
        font-size: 14px;
        &.active
          color: #ec8ccb;
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

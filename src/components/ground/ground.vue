<template>
  <div class="ground">
    <div class="ground-wrapper" >
      <div class="content-wrapper">
        <div class="avatar">
          <img src="./avatar.png" >
        </div>
        <div class="content">
          <span class="name">妈妈</span>
          <p class="main">今天去了成都~</p>
          <div class="pics">
            <img src="./pic.png">
          </div>
          <div class="rate">
            <input type="text" placeholder="输入评论">
            <input type="button" value="发送">
            <img src="./good.png">
          </div>
          <span class="time">2016/11/24</span>
        </div>
      </div>

      <div class="content-wrapper">
        <div class="avatar">
          <img src="./avatar.png" >
        </div>
        <div class="content">
          <span class="name">妈妈</span>
          <p class="main">今天去了成都~</p>
          <div class="pics">
            <img src="./pic.png">
          </div>
          <div class="rate">
            <input type="text" placeholder="输入评论">
            <input type="button" value="发送">
            <img src="./good.png">
          </div>
          <span class="time">2016/11/24</span>
        </div>
      </div>

      <div class="content-wrapper">
        <div class="avatar">
          <img src="./avatar.png" >
        </div>
        <div class="content">
          <span class="name">妈妈</span>
          <p class="main">今天去了成都~</p>
          <div class="pics">
            <img src="./pic.png">
          </div>
          <div class="rate">
            <input type="text" placeholder="输入评论">
            <input type="button" value="发送">
            <img src="./good.png">
          </div>
          <span class="time">2016/11/24</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  };
</script>

<style rel="stylesheet/stylus" lang="stylus">
  .ground
    position: absolute;
    top: 45px;
    bottom:51px;
    width:100%;
    overflow:auto;
    background-color: #d2d2d2;
    background-attachment: fixed;
    .ground-wrapper
      width:100%;
      height:100%;
      .content-wrapper
        display: flex;
        background: #fff;
        margin-bottom: 20px;
        padding: 10px;
        &:last-child
          margin:0;
        .avatar
          flex:0,0,60px;
          float: left;
          margin-right: 20px;
          width: 60px;
          height: 60px;
          img
            width:100%;
            height:100%;
            border-radius:50%;
        .content
          flex:1;
          display: inline-block;
          line-height:24px;
          .name
            font-size:16px;
            font-weight:700;
          .main
            font-size:14px;
          .pics
            img
              margin:5px 0;
              height: 85px;
              width:120px;
          .rate
            vertical-align: top;
            input[type="text"]
              padding:0 5px;
              border:1px solid #e86850;
              outline: none;
              width:150px;
              height:25px;
            input[type="button"]
              position: relative;
              top: -2px;
              background:#e86850;
              width:40px;
              height:27px;
              color: #fff;
              font-size:12px;
            img
              width: 26px;
              height: 26px;
              margin-left: 5px;
              vertical-align: top;
          .time
            position: absolute;
            top: 10px;
            right: 10px;
            color: rgb(111, 111, 111);
            font-size: 12px;
</style>

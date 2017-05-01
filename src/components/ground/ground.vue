<template>
  <div class="ground">
    <div class="ground-wrapper" >
      <div class="content-wrapper">
        <div class="avatar">
          <img src="./avatar.png" >
        </div>
        <div class="content">
          <span class="name">妈妈</span>
          <span class="time">2016/11/25</span>
          <p class="main">今天一家人去了杭州旅游，西湖非常美~推荐大家过来玩！</p>
          <div class="pics">
            <img src="./pic.png">
          </div>
          <div class="rate">
            <input type="text" placeholder="输入评论">
            <input type="button" value="发送">
          </div>
          <div class="rated">
            <img src="./avatar4.jpg">
            <span class="name">小姨：</span>
            <span class="rating">哇，这是你拍的吗，超级漂亮！</span>
          </div>
        </div>
      </div>

      <div class="content-wrapper">
        <div class="avatar">
          <img src="./avatar3.jpg" >
        </div>
        <div class="content">
          <span class="name">爸爸</span>
          <span class="time">2016/11/25</span>
          <p class="main">旅游真是累呀，不过累并快乐着！</p>
          <div class="rate">
            <input type="text" placeholder="输入评论">
            <input type="button" value="发送">
          </div>
        </div>
      </div>

      <div class="content-wrapper">
        <div class="avatar">
          <img src="./avatar2.jpg" >
        </div>
        <div class="content">
          <span class="name">小表妹</span>
          <span class="time">2016/11/24</span>
          <p class="main">作业多到写不完！谁来帮帮我</p>
          <div class="pics">
            <img src="./pic2.jpg">
          </div>
          <div class="rate">
            <input type="text" placeholder="输入评论">
            <input type="button" value="发送">
          </div>
        </div>
      </div>

      <div class="content-wrapper">
        <div class="avatar">
          <img src="./avatar5.jpg" >
        </div>
        <div class="content">
          <span class="name">大表哥</span>
          <span class="time">2016/11/24</span>
          <p class="main">小宝贝今天学会叫爸爸了！！发个说说纪念一下！！</p>
          <div class="rate">
            <input type="text" placeholder="输入评论">
            <input type="button" value="发送">
          </div>
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
        margin-bottom: 10px;
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
          .main{
            margin: 8px 0;
            font-size:15px;
          }
          .pics
            img
              margin:5px 0;
              height: 85px;
              width:120px;
          .rate
            vertical-align: top;
            input[type="text"]
              padding:0 5px;
              border:1px solid #ec8ccb;
              outline: none;
              width:150px;
              height:25px;
            input[type="button"]
              position: relative;
              top: -2px;
              background:#ec8ccb;
              width:40px;
              height:27px;
              color: #fff;
              font-size:12px;
            img
              width: 26px;
              height: 26px;
              margin-left: 5px;
              vertical-align: top;
          .rated{
            margin:5px 0 0 5px;
            font-size:13px;
            img{
              width:20px;
              border-radius:50%;
              vertical-align: text-bottom;
            }
            .name{
              color:#ec8ccb;
            }
          }
          .time
            position: absolute;
            color: #6f6f6f;
            font-size: 12px;
            right: 20px;
</style>

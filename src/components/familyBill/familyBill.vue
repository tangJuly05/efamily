<template>
  <div class="familyBill">
    <div class="bill">
      <p class="billClass"><span>缴</span></p>
      <div class="billContent">
        <div>
          <span class="name">缴纳电费</span>
          <span class="money">￥300.00</span>
        </div>
        <div>
          <span class="payName">支出人：妈妈</span>
          <span class="payWay">支付方式：网上支付</span>
        </div>
        <p class="time">2016.12.13</p>
      </div>
    </div>

    <div class="bill">
      <p class="billClass" style="background: #587058"><span>日</span></p>
      <div class="billContent">
        <div>
          <span class="name">菜市场买菜</span>
          <span class="money">￥20.70</span>
        </div>
        <div>
          <span class="payName">支出人：爷爷</span>
          <span class="payWay">支付方式：现金</span>
        </div>
        <p class="time">2016.12.13</p>
      </div>
    </div>

    <div class="bill">
      <p class="billClass" style="background: #FFD800"><span>购</span></p>
      <div class="billContent">
        <div>
          <span class="name">一件短袖</span>
          <span class="money">￥85.00</span>
        </div>
        <div>
          <span class="payName">支出人：小慧</span>
          <span class="payWay">支付方式：POS机</span>
        </div>
        <p class="time">2016.12.12</p>
      </div>
    </div>

    <div class="bill">
      <p class="billClass" style="background: #C75BB6"><span>其</span></p>
      <div class="billContent">
        <div>
          <span class="name">爱心捐赠</span>
          <span class="money">￥100.00</span>
        </div>
        <div>
          <span class="payName">支出人：弟弟</span>
          <span class="payWay">支付方式：现金</span>
        </div>
        <p class="time">2016.12.12</p>
      </div>
    </div>

    <div class="bill">
      <p class="billClass" style="background: #587058"><span>日</span></p>
      <div class="billContent">
        <div>
          <span class="name">菜市场买菜</span>
          <span class="money">￥30.50</span>
        </div>
        <div>
          <span class="payName">支出人：奶奶</span>
          <span class="payWay">支付方式：现金</span>
        </div>
        <p class="time">2016.12.11</p>
      </div>
    </div>

    <div class="bill">
      <p class="billClass"><span>缴</span></p>
      <div class="billContent">
        <div>
          <span class="name">缴纳电费</span>
          <span class="money">￥300.00</span>
        </div>
        <div>
          <span class="payName">支出人：妈妈</span>
          <span class="payWay">支付方式：网上支付</span>
        </div>
        <p class="time">2016.12.13</p>
      </div>
    </div>

    <img src="./addBill.png" class="addBill" @click="showBill">

    <div class="addBillDiv" v-show="addBill">
      <div class="payItem">
        <p>支出项</p>
        <button type="button" @click="changeColor =! changeColor" :class="changeColor?'buttonDefault':'buttonChange'">日常开销</button>
        <button type="button" @click="changeColor1 =! changeColor1" :class="changeColor1?'buttonDefault':'buttonChange'">缴    费</button>
        <button type="button" @click="changeColor2 =! changeColor2" :class="changeColor2?'buttonDefault':'buttonChange'">购    物</button>
        <button type="button" @click="changeColor3 =! changeColor3" :class="changeColor3?'buttonDefault':'buttonChange'">其    他</button>
      </div>
      <div class="payMethod">
        <p>支出方式</p>
        <button type="button" @click="changeColor4 =! changeColor4" :class="changeColor4?'buttonDefault':'buttonChange'">现金支付</button>
        <button type="button" @click="changeColor5 =! changeColor5" :class="changeColor5?'buttonDefault':'buttonChange'">POS机支付</button>
        <button type="button" @click="changeColor6 =! changeColor6" :class="changeColor6?'buttonDefault':'buttonChange'">网上支付</button>
      </div>
      <input type="text" placeholder="用  途">
      <input type="text" placeholder="金  额">
      <!--<span class="unit">￥</span>-->
      <input type="text" placeholder="支出人">
      <button type="submit">保    存</button>
      <p class="back" @click="billList">返回查看账单列表</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        showBar:false,
        addBill:false,
        changeColor:true,
        changeColor1:true,
        changeColor2:true,
        changeColor3:true,
        changeColor4:true,
        changeColor5:true,
        changeColor6:true
      };
    },
    methods: {
      show() {
        this.showBar = !this.showBar;
      },
      showBill() {
        this.addBill = true;
      },
      billList() {
        this.addBill = false;
      }
    }
  };
</script>

<style rel="stylesheet/stylus" lang="stylus">
  .familyBill{
    position: absolute;
    top: 45px;
    bottom: 51px;
    width: 100%;
    overflow: auto;
    background-color: #d2d2d2;
    .bill{
      background: #fff;
      margin-bottom: 10px;
      padding: 10px;
      .billClass{
        border-radius: 50%;
        background: #587498;
        width: 60px;
        height: 60px;
        color: #fff;
        font-size: 25px;
        font-weight: 700;
        float: left;
        margin-top: 11px;
        span{
          position: relative;
          top:17px;
          left: 17px;
        }
      }
      .billContent{
        margin-left:70px;
        div{
          margin:10px 0;
        }
        .name{
          font-size: 20px;
          font-weight: 600;
        }
        .money{
          float: right;
          color: red;
        }
        .payWay{
          margin-left:20px;
        }
        .time{
          color:gray;
          font-size:15px;
        }
      }
    }
    .addBill{
      width: 40px;
      position: fixed;
      left: 80%;
      top: 80%;
      background: #fff;
    }
    .addBillDiv{
      position: fixed;
      bottom: 51px;
      top: 45px;
      padding: 10px;
      background: #fff;
      line-height: 2;
      p{
        font-size:18px;
      }
      input[type=text]{
        padding-left:10px;
        margin:15px 0;
        border-radius:15px;
        border:1px solid #ec8ccb;
        width:95%;
        height:35px;
        outline:none;
      }
      .buttonDefault{
        border-radius:15px;
        margin:0 10px 10px 0;
        color:#ec8ccb;
        background: #fff;
        border:1px solid #ec8ccb;
        padding:5px 8px;
        outline:none;
      }
      .buttonChange{
        border-radius:15px;
        margin:0 10px 10px 0;
        color:#fff;
        border:none;
        background: #ec8ccb;
        padding:5px 8px;
        outline:none;
      }
      button[type=submit]{
        margin-top:20px;
        width:100%;
        height:40px;
        color:#fff;
        background:#ec8ccb;
        border:none;
        outline:none;
        font-size: 16px;
        border-radius:15px;
      }
      .back{
        margin-top:10px;
        color:#ec8ccb;
        text-align:center;
        font-size:14px;
      }
    }
  }

</style>

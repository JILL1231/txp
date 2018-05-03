<template>
  <div class="friend-guess">
    <div class="topic-warp">
      <div class="topic-text">请确认一道竞猜题目，发起好友竞猜</div>
      <button class="swipe-btn btn-front" @click="index = index >= 5 ? 0 : index + 1"></button>
      <button class="swipe-btn btn-back" @click="index = index <= 0 ? 5 : index - 1"></button>
      <div class="topic-swipe">
        <span class="pattern1"></span>
        <span class="pattern2"></span>
        <span class="pattern3"></span>
        <span class="pattern4"></span>
        <span class="pattern5"></span>
        <swipe class="slide" v-model="index"  :speed="300">
          <swipe-item v-for="i in itemCommon" :key="i">
            <h3 class="topic-title">{{i.title}}？</h3>
            <span class="topic-time">截止时间{{i.date}}</span>
            <ul class="topic-option">
              <li>A.{{i.option[0]}}</li>
              <li>B.{{i.option[1]}}</li>
              <li>C.{{i.option[0]}}</li>
            </ul>
          </swipe-item>
        </swipe>
      </div>    
    </div>
    <div class="topic-num">
      <label for="topicNum">参与人数</label>
      <input type="number" name="topicNum" id="topicNum" placeholder="请输入人数">
    </div>
    <textarea name="topicNote" id="topicNote" placeholder="小伙伴们，一起来参加我发起的竞猜吧！每人_一次献一朵花，买定离手哦！"></textarea>
    <button type="submit" class="topic-submit">确认发起竞猜</button>    
  </div>
</template>
<script>
import TopicSwipe from "./TopicSwipe";
import TopicSwipeItem from "./TopicSwipeItem";
export default {
  data() {
    return {
      index: 0,
      itemCommon: 4,
      guessDate:Object
    };
  },
  created() {
    this.$http.post("/api/seller").then(res => {
      this.itemCommon= res;
      console.log(res);
    });
  },
  components: {
    swipe: TopicSwipe,
    "swipe-item": TopicSwipeItem
  },
  mounted() {
    setTimeout(() => {
      this.item = 10;
    }, 6000);
  }
};
</script>
<style lang="less">
.friend-guess {
  position: relative;
  width: 640px;
  .topic-warp {
    background: #dfe3f7;
    padding-bottom: 4px;
  }
  .topic-text {
    font-size: 24px;
    color: #646e8a;
    text-align: center;
    padding: 40px 0 20px;
  }
  .topic-swipe {
    position: relative;
    width: 600px;
    height: 255px;
    margin: auto;
    border-radius: 12px;
    background: rgb(255, 255, 255);
    overflow: hidden;
    .pattern1 {
      position: absolute;
      left: -11px;
      top: -3px;
      width: 63px;
      height: 64px;
      border-radius: 50%;
      background-color: rgb(43, 132, 232);
      &::after {
        display: block;
        content: "";
        position: absolute;
        top: 16px;
        left: 18px;
        width: 36px;
        height: 35px;
        background: url(../../assets/img/ic_Q.png);
        background-size: contain;
      }
    }
    .pattern2 {
      position: absolute;
      left: 0;
      top: 0;
      width: 117px;
      height: 9px;
      border-radius: 4px;
      background-color: rgb(43, 132, 232);
    }
    .pattern3 {
      position: absolute;
      left: 128px;
      top: 0;
      width: 13px;
      height: 9px;
      border-radius: 4px;
      background-color: rgb(43, 132, 232);
    }
    .pattern4 {
      position: absolute;
      right: 104px;
      bottom: 0;
      width: 13px;
      height: 8px;
      border-radius: 4px;
      background-color: rgb(237, 92, 81);
    }
    .pattern5 {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 94px;
      height: 8px;
      border-radius: 4px 0 4px 4px;
      background-color: rgb(237, 92, 81);
    }
  }
  .swipe-btn {
    position: absolute;
    top: 196px;
    width: 36px;
    height: 36px;
    padding: 0;
    border-radius: 50%;
    z-index: 2;
    &.btn-front {
      left: 10px;
      background: url(../../assets/img/ic_front.png)rgb(157, 164, 195) no-repeat
        center center;
      background-size: 12px 20px;
    }
    &.btn-back {
      right: 10px;
      background: url(../../assets/img/ic_back.png)rgb(157, 164, 195) no-repeat center
        center;
      background-size: 12px 20px;
    }
  }
  .slide {
    width: 600px;
    height: 255px;
  }
  .topic-title {
    font-size: 28px;
    font-weight: normal;
    line-height: 40px;
    margin: 0;
    color: rgb(100, 110, 138);
    text-transform: uppercase;
    padding: 21px 28px 15.5px 69px;
    box-sizing: border-box;
  }
  .topic-time {
    display: block;
    font-size: 24px;
    line-height: 60px;
    color: rgb(187, 198, 229);
    text-transform: uppercase;
    margin: 0 69px;
    border-top: 4px dashed rgb(187, 198, 229);
  }
  .topic-option {
    display: flex;
    margin: 0 69px;
    padding: 0;
    font-size: 24px;
    line-height: 60px;
    color: rgb(100, 110, 138);
    text-transform: uppercase;
    li:not(:last-child) {
      position: relative;
      padding-right: 48px;
      &::after {
        display: block;
        content: "/";
        position: absolute;
        top: 0;
        right: 20px;
        color: #eaeef8;
        font-size: 18px;
      }
    }
  }
  .topic-num {
    position: relative;
    width: 600px;
    height: 88px;
    margin: 26px auto 0;
    padding: 0 20px;
    box-sizing: border-box;
    border-radius: 12px;
    background: rgb(255, 255, 255);
    overflow: hidden;
    color: #646e8a;
    label {
      font-size: 23px;
      color: rgb(100, 110, 138);
      text-transform: uppercase;
      line-height: 88px;
    }
    input {
      font-size: 23px;
      color: rgb(100, 110, 138);
      text-transform: uppercase;
      line-height: 88px;
      border: 0;
      width: 440px;
      float: right;
      text-align: right;
    }
  }
  textarea[name="topicNote"] {
    position: relative;
    width: 600px;
    height: 140px;
    line-height: 40px;
    margin: 30px 20px 0;
    padding: 20px;
    box-sizing: border-box;
    border: 0;
    border-radius: 12px;
    background: rgb(255, 255, 255);
    overflow: hidden;
    font-size: 23px;
    color: #646e8a;
    text-transform: uppercase;
    resize: none;
  }
  .topic-submit {
    width: 600px;
    height: 80px;
    line-height: 80px;
    margin: 30px 20px 0;
    font-size: 23px;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    border-radius: 12px;
    background-color: rgb(237, 92, 81);
  }
}
</style>


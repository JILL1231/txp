<template>
  <div>
    <header class="detail-head">
      <div class="user-logo">
        <img src="../assets/img/user_logo.png" alt="">
      </div>
      <div class="user-info">
        <p class="user-friend"><span class="join-num">{{guessDetail.joinNum}}</span>/{{totalNum || guessDetail.totalNum}}位好友参与</p>
        <h3 class="user-name">{{guessDetail.userName}}</h3>
        <p class="user-note">{{ note|| guessDetail.note}}</p>
      </div>
    </header>
    <section class="detail-guess">
      <h3 class="guess-title">{{qus.title || guessDetail.title}}</h3>
      <span class="guess-time">截止时间{{qus.date || guessDetail.date}}</span>
      <ul class="guess-option">
        <li v-for="(option,index) in options" :key="option.id">
          <p>{{index}}{{option.text}}</p>
          <img src="../assets/img/ic_flower.png" alt="">
        </li>
      </ul>            
    </section>
    <section class="guess-list">
      <div class="list-content"  v-for="item in items" :key="item.id">
        <span class="list-num">{{item.sup}}</span>
        <p class="list-text">好友献花支持</p>
        <ul class="list-friend">
          <li v-for="(listItem, index) in item.list" :key="listItem.listId">
            <img :src="`/static/images/friend_logo_${index + 1}.png`" alt="">
            <p class="friend-name">{{listItem.friendName}}</p>
          </li>
        </ul>
      </div>
    </section>
    <div class="tan">
      <span class="forbid"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      guessDetail: {
        supList: [
          {
            list: [{ friendName: "" }]
          }
        ]
      },
      items:[],
      lists:[],
      qus: {},
      options:[],
      note:'',
      totalNum:'',
    };
  },
  mounted() {
    if (this.$route.params.qus && typeof this.$route.params.qus.id !== 'undefined') {
      this.qus = this.$route.params.qus;
      this.options = this.$route.params.qus.option;
      this.note = this.$route.params.note;
      this.totalNum = this.$route.params.totalNum;
    }
    this.$http.post("/api/guessDetail").then(res => {
      this.guessDetail = res.data;
      this.items = res.data.supList;
      this.options = res.data.option;
      console.log(res);
    });
  }
};
</script>
<style>

</style>

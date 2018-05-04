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
      <h3 class="guess-title">{{qus.title || guessDetail.title}}?</h3>
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
        <List ref="scroll" @loadmore="getList(item.id)" class="list-wrapper" :loaded.sync="states[item.id]">
          <ul class="list-friend">
              <li v-for="listItem in listItems" :key="listItem.listId">
                <!-- <img src="{{listItem.url}}" alt=""> -->
                <p class="friend-name">{{listItem.friendName}}</p>
              </li>
          </ul>
        </List>
        
      </div>
    </section>
    <router-link to="/Tan" class="tan"><span class="forbid"></span></router-link>
  </div>
</template>
<script>
import List from "../components/detail/List";
export default {
  components: {
    List
  },
  data() {
    return {
      guessDetail: {
        supList: [
          {}
        ]
      },
      states: {
        1: false,
        2: false,
        3: false
      },
      limit: 10,
      items: [],
      listItems:[],
      qus: {},
      options: [],
      note: "",
      totalNum: ""
    };
  },
  created () {
    this.getList(1);
    this.getList(2);
    this.getList(3);
  },
  methods: {
    getList(id) {
      this.$http.post("/api/getList"+id,{
        page:this.page,
        limit: this.limit
      }).then(res => {
        this.listItems = res.data.option;
        this.states[id] = true
        console.log(res);
      }).catch(error => {
        console.log(error);
      });
    }
  },
  mounted() {
    if (
      this.$route.params.qus &&
      typeof this.$route.params.qus.id !== "undefined"
    ) {
      this.qus = this.$route.params.qus;
      this.options = this.$route.params.qus.option;
      this.note = this.$route.params.note;
      this.totalNum = this.$route.params.totalNum;
    }
    this.$http.post("/api/guessDetail").then(res => {
      this.guessDetail = res.data;
      this.items = res.data.supList;
      this.options = res.data.option;
      this.states[id] = true
      console.log(res);
    }).catch(error => {
      console.log(error);
    });

  }
};
</script>
<style>

</style>

<template>
    <div>
        <div class="tab-items">
            <a class="item" :class="{ active: currentComp === 'FriendsGuess' }" @click="setComp('FriendsGuess')">
                <img src="../assets/img/tab_friend.png" alt="好友竞猜">
                <p>好友竞猜</p>
            </a>
            <span class="tab_line"></span>
            <a class="item" :class="{ active: currentComp === 'FieryGuess' }" @click="setComp('FieryGuess')">
                <img src="../assets/img/tab_fiery.png" alt="火热竞猜">
                <p>火热竞猜</p>
            </a>
            <span class="tab_line"></span>
            <a class="item" :class="{ active: currentComp === 'PacketGuess' }" @click="setComp('PacketGuess')">
                <img src="../assets/img/tab_packet.png" alt="猜题赢红包">
                <p>猜题赢红包</p>
            </a>
            <span class="tab_msg"></span>
        </div>
        <div class="tab-content">
            <keep-alive>
                <component :is="currentComp"></component>
            </keep-alive>
            <ul class="guess-footer">
                <li class='foo-infro'>玩法介绍</li><span class="foo_line"></span>
                <li class='foo-record'>我的纪录</li><span class="foo_line"></span>
                <li class='foo-public'>关注公众号</li>
            </ul>
        </div>
        <!--  <router-link to="/Detail">Detail</router-link> -->
    </div>
</template>
<script>
import FriendsGuess from "../components/index/FriendsGuess";
import FieryGuess from "../components/index/FieryGuess";
import PacketGuess from "../components/index/PacketGuess";

export default {
  components: {
    FriendsGuess,
    FieryGuess,
    PacketGuess
  },
  created() {
    this.$http.get("http://localhost:8080/api/foods").then(res => {
      console.log(res);
    });
  },
  data() {
    return {
      currentComp: "FriendsGuess"
    };
  },
  methods: {
    setComp(comp, index) {
      this.currentComp = comp;
    }
  }
};
</script>


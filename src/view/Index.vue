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
            <router-link to="/Msg" class='tab_msg'></router-link>
        </div>
        <div class="tab-content">
            <keep-alive>
                <component :is="currentComp"></component>
            </keep-alive>
            <div class="guess-footer">
                <router-link to="/Infro" class='foo-infro'>玩法介绍</router-link><span class="foo_line"></span>
                <router-link to="/Record" class='foo-record'>我的纪录</router-link><span class="foo_line"></span>
                <router-link to="/Public" class='foo-public'>关注公众号</router-link>
            </div>
        </div>
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
  
  data() {
    return {
      currentComp: "FriendsGuess",
    };
  },
  methods: {
    setComp(comp, index) {
      this.currentComp = comp;
    },
  }
};
</script>


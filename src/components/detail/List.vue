<template>
    <div ref="scroll" class="scroll-list">
        <div class="scroll-list-wrap">
        <slot></slot>
        </div>
        <slot name="loading">
            <div v-show="isLoading" class="scroll-list-loading">
                <span class="scroll-list-loading-text">{{loadingText}}</span>
            </div>
        </slot>
        <slot name="complate">
            <div v-show="isComplate" class="scroll-list-loading">{{complateText}}</div>
        </slot>
    </div> 
</template>

<script>
export default {
  props: {
    // 距离底部数值，小于或等于该数值触发自定义事件loadmore
    bottomDistance: {
      type: [Number, String],
      default: 70
    },
    // 加载中的文字
    loadingText: {
      type: String,
      default: "正在加载..."
    },
    // 数据加载完成的文字
    complateText: {
      type: String,
      default: "-- 我是有底线滴 --"
    },
    loaded: {
        type: Boolean,
        default: false
    }
  },
  data() {
    return {
      // 用来判定数据是否加载完成
      isComplate: false,
      // 用来判定是否正在加载数据
      isLoading: false,
      // 组件容器
      scroll: null,
      // 正文容器
      scrollWrap: null
    };
  },
  watch: {
    // 监听isLoading，如果isLoading的值为true则代表触发了loadmore事件
    isLoading(val) {
        this.$emit('update:loded', val)
        if (val) {
            this.$emit("loadmore");
        }
    },
    loaded(val) {
        this.isLoading = val
    }
  },
  methods: {
    // 初始化组件，获取组件容器、正文容器节点，并给组件容器节点绑定滚动事件
    init() {
      this.scroll = this.$refs.scroll;
      this.scrollWrap = this.scroll.childNodes[0];
      this.scroll.addEventListener("scroll", this.scrollEvent);
      this.$emit("init", this.scroll);
    },
    scrollEvent(e) {
      // 如果数据全部加载完成了，则再也不触发loadmore事件
      if (this.isComplate) return;
      let scrollTop = this.scroll.scrollTop;
      let scrollH = this.scroll.offsetHeight;
      let scrollWrapH = this.scrollWrap.offsetHeight;
      // 组件容器滚的距离 + 组件容器本身距离大于或者等于正文容器高度 - 指定数值 则触发loadmore事件
      if (scrollTop + scrollH >= scrollWrapH - this.bottomDistance) {
        this.isLoading = true;
      }
    },
    // 当前数据加载完成后调用该函数
    loaded() {
      this.isLoading = false;
    },
    // 所有数据加载完成后调用该函数
    compleate() {
      this.isLoading = false;
      this.isComplate = true;
      this.scroll.removeEventListener("scroll", this.scrollEvent);
    }
  },
  mounted() {
    this.$nextTick(this.init);
  }
};
</script>

<style lang="less">
    .scroll-list-loading-text{
        box-sizing: border-box;
        margin-top: 24px;
        margin-left: 20px;
        font-size: 18px;
        color: rgb(119, 129, 172);
        text-transform: uppercase;
        line-height: 18px;
    }
</style>

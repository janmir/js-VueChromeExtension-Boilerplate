<template>
  <div id="demo">
    <!-- 
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:after-enter="afterEnter"
    v-on:enter-cancelled="enterCancelled"

    v-on:before-leave="beforeLeave"
    v-on:leave="leave"
    v-on:after-leave="afterLeave"
    v-on:leave-cancelled="leaveCancelled"
     -->
    <transition name="fade"
    v-on:enter="animateEnter"
    v-on:leave="animateLeave">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script>
  export default {
    name: '<template>',
    props: {
      msg: String
    },
    props:[],
    data() {
      return{

      }
    },
    created() {},
    mounted() {},
    watch:{},
    computed: {},
    filters: {},
    methods: {
      animateEnter(el, done) {
      },
      animateLeave(el, done) {
      },
    },
    components: {},
  }
</script>
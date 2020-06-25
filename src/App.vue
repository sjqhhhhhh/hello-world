<template>
  <div>
    <!-- <keep-alive> -->
    <!-- <router-view v-if="$route.meta.keepAlive"></router-view> -->
    <!-- 这里是会被缓存的视图组件 -->
    <!-- </keep-alive> -->
    <router-view></router-view>
    <!-- 这里是不被缓存的视图组件 -->
    <!-- <keep-alive :include="cachedRouteNames"> -->
      <!-- <router-view></router-view> -->
    <!-- </keep-alive> -->
  
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
  
      }
    },
    computed: {
     
    }
  }
</script>


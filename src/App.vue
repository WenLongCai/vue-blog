<template>
  <div id="app">
    <el-container>
      <NavMenu></NavMenu>
      <transition name="fade" mode="out-in">
        <div class="main-container">
          <router-view/>
        </div>
      </transition>
    </el-container>
  </div>
</template>

<script>
import NavMenu from './components/common/NavMenu'
export default {
  name: 'App',
  data: function () {
    return {
      value: ''
    }
  },
  components: {
    NavMenu
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  widht: 100%;
  height: 100%;
}
.main-container {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: #f4f6f8;
  overflow-y: scroll;
}
.el-container {
  width: 100%;
  height: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

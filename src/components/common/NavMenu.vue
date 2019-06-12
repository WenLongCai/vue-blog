<template>
  <div id="nav-menu">
    <el-aside>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo">
        <router-link to="/home">
          <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
          </el-menu-item>
        </router-link>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
        </el-menu-item>
        <router-link to="/wtArt">
          <el-menu-item index="3">
            <i class="el-icon-notebook-2"></i>
          </el-menu-item>
        </router-link>
        <el-menu-item index="4">
          <i class="el-icon-reading"></i>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: 'navMenu'
}
</script>

<style scoped lang="scss">
  .el-aside {
    width: 65px !important;
    height: 100%;
    background-color: #606266;
  }
  .el-menu {
    height: 100%;
    background-color: #606266;
  }
  .el-menu-item:hover {
    i {
      color: #606266
    }
  }
  .el-menu-item i {
    color: #ffffffb0;
  }
</style>

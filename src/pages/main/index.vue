<template>
  <div>
    <el-container>
      <el-header style="text-align: right; font-size: 14px;">
        <span>你好！王小虎</span>
      </el-header>
    </el-container>
    <el-container>
      <el-aside width="200px">
        <el-menu router>
          <el-menu-item index="/home/dashboard"><i class="el-icon-s-home"></i>首页</el-menu-item>
          <el-menu-item index="/home/user/setting"><i class="el-icon-message"></i>用户设置</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="scss">
.el-header {
  background-color: $--color-header;
  line-height: 60px;
}
.el-aside {
  background-color: $--color-aside;
  height: calc(100vh - 60px);
}
.el-menu {
  border-right: none;
}
</style>

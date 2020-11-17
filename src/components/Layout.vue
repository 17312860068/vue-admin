<template>
  <el-container>
    <el-aside width="auto">
      <self-aside></self-aside>
    </el-aside>
    <el-container>
      <el-header style="padding:0;height:auto"><self-header></self-header></el-header>
      <el-main>
        <div>
          <!-- <link-tags></link-tags> -->
          <div class="lay-content">
            <slot></slot>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import selfAside from "@/components/Aside.vue";
import selfHeader from "@/components/Header.vue";
// import LinkTags from "@/components/LinkTags.vue";
export default {
  name: "Layout",
  components: {
    selfAside,
    selfHeader,
    // LinkTags,
  },
};
</script>

<style scoped lang="scss">
.el-container {
  height: 100%;
}
.el-menu {
  border-right: none;
}
.el-main {
  padding: 10px;
  background: #fff;

  .lay-content {
    height: calc(100vh - 124px);
    border-radius: 8px;
  }
  // .lay-content:hover {
  //   box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  // }
}
</style>

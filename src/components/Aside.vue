<template>
  <el-menu
    unique-opened
    :default-active="this.$route.path"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    :background-color="bgColor"
    :text-color="tColor"
    :active-text-color="textActiveColor"
    :router="true"
  >
    <template v-for="item in menuData">
      <menutree v-if="item.children" :data="item" :key="item.index"></menutree>
      <el-menu-item :index="item.index" v-if="!item.children" :key="item.index">
        <i v-if="item.icon" :class="item.icon"></i>
        <span slot="title">{{ item.strName }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import menutree from "@/components/Menutree.vue";
import config from "@/config/index.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      bgColor: config.color.menu.menuBackgroundColor,
      tColor: config.color.menu.menuTextColor,
      textActiveColor: config.color.menu.menuActiveTextColor,
    };
  },
  components: {
    menutree,
  },
  computed: mapState({
    menuData: (state) => state.Menu.menus,
    isCollapse: (state) => state.Menu.isCollapse,
  }),
  methods: {},
  created() {},
};
</script>

<style scoped lang="scss">
.el-menu {
  height: 100%;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>

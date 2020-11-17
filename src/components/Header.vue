<template>
  <div>
    <div class="self-header">
      <div class="header-left">
        <el-button
          class="btn-header"
          @click="setIsCollapse"
          size="mini"
          icon="el-icon-menu"
        ></el-button>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="header-breadcrumd">
          <el-breadcrumb-item v-for="(item, index) in breads" :key="index">{{
            item.strName
          }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <el-badge value="new" class="user-badge">
            <img :src="require('@/assets/images/user.png')" class="user-img" />
          </el-badge>
        </span>
        <el-dropdown-menu slot="dropdown" class="header-dropdown">
          <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-user">
            <el-badge is-dot class="header-nontify-dot">
              <span>系统通知</span>
            </el-badge>
          </el-dropdown-item>
          <el-dropdown-item icon="el-icon-edit">修改密码</el-dropdown-item>
          <el-dropdown-item icon="el-icon-close">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <link-tags></link-tags>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import LinkTags from "@/components/LinkTags.vue";
export default {
  data() {
    return {};
  },
  components: {
    LinkTags,
  },
  watch: {
    $route: function(val) {
      this.setBreads({ index: val.path, setTag: true });
    },
  },
  computed: mapState({
    breads: (state) => state.Menu.breads,
    isCollapse: (state) => state.Menu.isCollapse,
  }),
  methods: {
    ...mapMutations("Menu", {
      setBreads: "setBreads",
      setIsCollapse: "setIsCollapse",
    }),
  },
};
</script>

<style scoped lang="scss">
.self-header {
  height: 60px;
  background: #545c64;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 40px;
  .header-left {
    display: flex;
    align-items: center;
    .btn-header {
      margin-right: 20px;
      margin-left: 10px;
    }
    .header-breadcrumd {
      /deep/.el-breadcrumb__inner.is-link,
      /deep/.el-breadcrumb__inner {
        color: #ffd04b;
      }
    }
  }

  .user-badge /deep/.el-badge__content {
    font-size: 10px;
    height: 12px;
    line-height: 12px;
    border: none;
    top: 5px;
    right: 15px;
    padding: 0 3px;
  }
  .user-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .el-button:focus,
  .el-button:hover {
    color: #ffd04b;
    background: #fff;
    border: 1px solid #dcdfe6;
  }
}
</style>

<template>
  <!-- 顶部标签栏 -->
  <div class="content-tags">
    <div>
      <el-tag
        :effect="tag.effect"
        v-for="(tag, index) in selectTags"
        :key="index"
        :closable="tag.closable"
        :type="tag.type"
        @close="closeTag(index)"
        @click="clickTag(tag)"
      >
        {{ tag.strName }}
      </el-tag>
    </div>
    <div class="tags-button">
      <el-button icon="el-icon-search" size="mini" circle></el-button>
      <el-button
        @click="clearAllTag"
        size="mini"
        type="primary"
        icon="el-icon-delete"
        circle
      ></el-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "menutree",
  components: {},
  props: ["data"],
  computed: mapState({
    selectTags: (state) => state.Menu.selectTags,
  }),

  mounted() {},
  methods: {
    clickTag(tag) {
      this.$router.push(tag.index);
    },
    ...mapMutations("Menu", {
      closeTag: "deleteSelectTags",
      clearAllTag: "clearAllTag",
    }),
  },
};
</script>
<style lang="scss" scope>
.content-tags {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  background: #f9f9f9;
  .el-tag {
    margin-right: 5px;
    cursor: pointer;
  }
}
</style>

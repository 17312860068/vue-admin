<template>
  <el-submenu :index="data.index" :key="data.index">
    <template slot="title">
      <i v-if="data.icon" :class="data.icon"></i>
      <span>{{ data.strName }}</span>
    </template>

    <template v-for="item in data.children">
      <menutree v-if="item.children" :data="item" :key="item.index"></menutree>
      <el-menu-item :index="item.index" v-if="!item.children" :key="item.index">
        <i v-if="item.icon" :class="item.icon"></i>
        <span slot="title">{{ item.strName }}</span>
      </el-menu-item>
    </template>
  </el-submenu>
</template>
<script>
import menutree from "@/components/Menutree.vue";
export default {
  name: "menutree",
  components: {
    menutree,
  },
  props: ["data"],
  methods: {},
};
</script>

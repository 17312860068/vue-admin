<template>
  <div>
    <div>我是视频管理页</div>
    <el-button @click="clickSend">默认按钮</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import test from "@/api/test.js";
import Mock from "mockjs";
export default {
  name: "Video",
  components: {},
  methods: {
    clickSend() {
      //test.test();
      let datas = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        "list|1-10": [
          {
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            "id|+1": 1,
            "string|1-4": "ss",
            "booble|1-4": true,
            "obj|1-4": {
              xxx: 11,
              dd: 22,
              ff: "dd",
              gg: "f",
            },
          },
        ],
      });

      this.$http.get("/data/tableData").then((res) => {
        console.log("sssssssssssssssssssssssssss");
        console.log(res.data, "res");
      });
      console.log(datas);
    },
  },
};
</script>

<style scoped lang="scss"></style>

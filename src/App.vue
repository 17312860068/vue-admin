<template>
  <div id="app">
    <layout>
      <router-view />
    </layout>
    <!-- <router-view /> -->
  </div>
</template>
<script>
// @ is an alias to /src
import Layout from "@/components/Layout.vue";

export default {
  components: {
    Layout,
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
}
</style>

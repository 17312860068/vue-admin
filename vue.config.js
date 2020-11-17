module.exports = {
  outputDir: "dist",
  publicPath: "/",
  assetsDir: "assets",
  configureWebpack: (config) => {
    // 多核启动编译及内存提升
    const data = config.plugins[8];
    // 进程数量
    data.workersNumber = 2; // 会占用额外内存不释放，不建议开发阶段使用
    // 单个进程最大使用内存
    data.memoryLimit = 8192;
  },
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://api.myshop.cn",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
        secure: false,
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        // data: `@import "@/assets/scss/_variable.scss";`,
        prependData: `@import "@/assets/scss/_variable.scss";`,
      },
    },
  },
};

import router from "../router";
const findBreads = (arr, index, obj) => {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].children) {
      if (index === arr[i].index) {
        obj.breads.push({
          strName: arr[i].strName,
        });
        obj.val = arr[i];
        obj.isEnd = true;
        return obj;
      } else if (i === arr.length - 1) {
        obj.breads = [];
      }
      continue;
    }
    if (arr[i].children) {
      obj.breads.push({
        strName: arr[i].strName,
      });
      let temp = findBreads(arr[i].children, index, obj);
      if (obj.isEnd) return temp;
    }
  }
};

export default {
  namespaced: true,
  state: {
    isCollapse: false,
    selectTags: [{ strName: "首页", type: "", index: "/", effect: "dark", closable: false }], //tags
    breads: [{ strName: "首页" }],
    nowSelect: "/",
    types: ["success", "info", "warning", "danger", ""],
    menus: [
      {
        index: "/",
        strName: "首页",
        name: "home",
        icon: "el-icon-s-home",
      },
      {
        index: "用户管理",
        strName: "用户管理",
        name: "user",
        icon: "el-icon-user-solid",
        children: [
          {
            strName: "用户列表",
            name: "user",
            index: "/user",
          },
          {
            strName: "新增用户",
            name: "user",
            index: "/user/add",
          },
        ],
      },
      {
        strName: "角色管理",
        name: "role",
        icon: "el-icon-s-custom",
        index: "/role",
      },
      {
        strName: "文章管理",
        name: "article",
        icon: "el-icon-document",
        index: "/article",
      },
      {
        strName: "视频管理",
        name: "video",
        icon: "el-icon-video-camera",
        index: "/video",
      },
    ],
  },
  mutations: {
    setKey(state, { key, val }) {
      state[key] = val;
    },
    setIsCollapse(state) {
      state.isCollapse = !state.isCollapse;
    },
    setMenus(state, menu) {
      // 变更状态
      state.menus = menu;
    },
    setNowSelect(state, now) {
      // 变更状态
      state.nowSelect = now;
    },

    // 设置面包屑
    setBreads(state, val) {
      if (!val.index) return;
      let temp = findBreads(state.menus, val.index, { breads: [], isEnd: false });
      state.breads = temp.breads;
      if (val.setTag && val.setTag === true) {
        this.commit("Menu/addSelectTags", temp.val);
      }
    },

    //点击菜单添加标签
    addSelectTags(state, val) {
      if (!val.index) return;
      let hasTag = false;
      state.selectTags.forEach((element) => {
        if (element.index === val.index) {
          hasTag = true;
          element.effect = "dark";
        } else {
          element.effect = "light";
        }
      });
      if (hasTag) return;
      let obj = { ...val };
      const type = state.types.shift();
      obj.type = type;
      obj.effect = "dark";
      obj.closable = true;
      state.types.push(type);
      state.selectTags.push(obj);
    },

    deleteSelectTags(state, index) {
      if (state.selectTags[index].effect === "dark") {
        state.selectTags.splice(index, 1);
        router.push({ path: state.selectTags[index - 1].index });
      } else {
        state.selectTags.splice(index, 1);
      }
    },
    clearAllTag(state) {
      state.selectTags = [state.selectTags.shift()];
      router.push({ path: state.selectTags[0].index });
    },
    // clickTag(state, tag) {
    //   // state.selectTags.forEach((element) => {
    //   //   if (element.index === tag.index) {
    //   //     element.effect = "dark";
    //   //   } else {
    //   //     element.effect = "light";
    //   //   }
    //   // });
    //   // this.commit("Menu/setBreads", tag);
    //   router.push({ path: tag.index });
    // },
  },
  actions: {},
  modules: {},
};

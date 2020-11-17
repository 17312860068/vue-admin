<template>
  <div class="page-home">
    <div class="home-left">
      <el-card shadow="hover" :body-style="{ height: '224px' }">
        <div class="left-top">
          <div class="left-top-t  mb20 ">
            <img :src="require('@/assets/images/user.png')" class="user-img" alt="" />
            <div class="left-top-word">
              <span class="left-top-word-1">王大毛</span>
              <span class="left-top-word-2">炒鸡管理员</span>
            </div>
          </div>
          <div class="line" style="margin-bottom:20px"></div>
          <div class="mb10"><span>上次登录时间：</span><span>2019-08-08</span></div>
          <div><span></span>上次登录地点：<span>徐州</span></div>
        </div>
      </el-card>

      <div style="margin-top:5%">
        <el-card shadow="hover" :body-style="{ overflow: 'inherit' }">
          <div class="left-down">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="name" label="技术"> </el-table-column>
              <el-table-column prop="times" label="耍流氓次数"> </el-table-column>
              <el-table-column prop="price1" label="价格1"> </el-table-column>
              <el-table-column prop="price2" label="价格2"> </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
    </div>

    <div class="home-right">
      <div class="home-right-top">
        <!-- 顶部块 -->
        <div class="home-right-top-item" v-for="(item, index) in 6" :key="index">
          <el-card shadow="hover" :body-style="{ padding: 0, overflow: 'inherit' }"
            ><div class="home-right-top-item-c">
              <div class="home-right-top-item-c-l">
                <i class="el-icon-user-solid icon-r"></i>
              </div>
              <div class="home-right-top-item-c-r">
                <span>￥ 1234</span>
                <span class="home-right-top-item-c-r-2">今日支付订单</span>
              </div>
            </div></el-card
          >
        </div>
      </div>

      <!-- 中部 -->
      <div class="home-right-mid">
        <el-card shadow="hover" :body-style="{ padding: '20px', overflow: 'unset', width: '100%' }">
          <echarscom :height="300"></echarscom>
        </el-card>
      </div>
      <!-- 底部 -->
      <div class="home-right-bottom">
        <div class="item">
          <el-card
            shadow="hover"
            :body-style="{ padding: '20px', overflow: 'unset', width: '100%' }"
            ><echarscom :height="300"></echarscom
          ></el-card>
        </div>
        <div class="item">
          <el-card
            shadow="hover"
            :body-style="{ padding: '20px', overflow: 'unset', width: '100%' }"
            ><echarscom :height="300"></echarscom
          ></el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Echarscom from "@/components/Echars/Echarscom.vue";
export default {
  name: "Home",
  components: {
    Echarscom,
  },
  data() {
    return {
      tableData: [
        {
          times: "10",
          name: "php",
          price1: "1",
          price2: "2",
        },
        {
          times: "10",
          name: "java",
          price1: "1",
          price2: "2",
        },
        {
          times: "10",
          name: "js",
          price1: "1",
          price2: "2",
        },
        {
          times: "10",
          name: "ios",
          price1: "1",
          price2: "2",
        },
        {
          times: "10",
          name: "py",
          price1: "1",
          price2: "2",
        },
        {
          times: "10",
          name: "js",
          price1: "1",
          price2: "2",
        },
        {
          times: "10",
          name: "ios",
          price1: "1",
          price2: "2",
        },
        {
          times: "10",
          name: "py",
          price1: "1",
          price2: "2",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.page-home {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  .el-card {
    overflow: inherit;
  }
  .mt10 {
    margin-top: 10px;
  }
  .mr30 {
    margin-right: 30px;
  }
  .mb10 {
    margin-bottom: 10px;
  }
  .mb20 {
    margin-bottom: 20px;
  }
  .icon-r {
    color: #fff;
    font-size: 30px;
  }

  .line {
    height: 2px;
    width: 100%;
    background: #ccc;
  }
  .home-left {
    width: 32%;
    display: flex;
    flex-direction: column;
    height: 100%;
    .left-top-t {
      display: flex;
      align-items: center;
      width: 100%;
      .user-img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right: 10%;
      }

      .left-top-word {
        display: flex;
        flex-direction: column;
        &-1 {
          margin-bottom: 10px;
          font-size: 20px;
          font-weight: bold;
        }
        &-2 {
          color: #d4883a;
        }
      }
    }
  }
  // 右边
  .home-right {
    width: 66%;
    display: flex;
    flex-direction: column;
    .home-right-top {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .home-right-top-item {
        width: 32%;
        margin-bottom: 10px;
        .home-right-top-item-c {
          display: flex;
          align-items: center;
          &-l {
            width: 72px;
            height: 72px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #d4883a;
            margin-right: 18%;
          }
          &-r {
            display: flex;
            flex-direction: column;
            &-2 {
              margin-top: 8px;
              font-size: 10px;
              color: #d87575;
            }
          }
        }
      }
    }
  }

  // 右边中部
  .home-right-mid {
    margin-bottom: 10px;
  }
  .home-right-bottom {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .item {
      width: 49%;
    }
  }
}
</style>

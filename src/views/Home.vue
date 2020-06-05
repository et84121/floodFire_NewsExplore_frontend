<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col>
          <b-jumbotron class="my-2">
            <template v-slot:header>FloodFire News Explore</template>

            <template v-slot:lead>
              The data explore tool for FloodFire News database
            </template>

            <hr class="my-4" />

            <p>
              CopyRight : FloodFire Lab
            </p>

            <b-button class="mx-1" variant="primary" href="#">
              前往新聞來源列表
            </b-button>
            <b-button class="mx-1" variant="success" href="#">
              查看資料數據統計
            </b-button>
          </b-jumbotron>
        </b-col>
      </b-row>
      <b-row class="my-2">
        <b-col>
          <h2>新聞媒體列表</h2>
          <b-table striped hover :items="newsSources"></b-table>
        </b-col>
      </b-row>
      <b-row>
        <b-col><h2>數據統計</h2> </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h3>熱詞統計</h3>
        </b-col>
        <b-col>
          <h3>資料庫相關數據統計</h3>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import ECharts from "vue-echarts"; // 在 webpack 环境下指向 components/ECharts.vue

// 手动引入 ECharts 各模块来减小打包体积
// import "echarts/lib/chart/bar";
// import "echarts/lib/component/tooltip";
export default {
  name: "Home",
  components: {
    // "v-chart": ECharts
  },
  data() {
    return {
      newsSources: [
        { name: "中時", num: 20 },
        { name: "聯合", num: 30 }
      ],
      database_stat_pie: {
        title: {
          text: "pie"
        }
      }
    };
  }
};
</script>

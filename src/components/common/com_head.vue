<template>
    <div style="height:100%;" class="common">
       <div  class="fresh-row" style="flex: 0 0 auto;">
         <!----> 
            <div   class="navigation home-navigation">
              <p >
              上海市<span  class="mn-icon" style="width: 19.2px; height: 19.2px;">
              <span class="mn-icon-svg" style="width: 19.2px; height: 19.2px;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"> -->
                 <path d="M8 12l8 8 8-8z">
                </path>
              </svg>
          </span> <!----></span>
      </p> 
      <div  class="fresh-search-bar">
        <div  class="fresh-search-bar-control">
          <img  src="data:image/png;base64,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"></div>
          </div>
        </div>

          <!----></div>

    </div>
</template>
<style src="./com_head.scss" lang="scss" scoped>

  

</style>


<script>
// import http from "./../../utils/HttpClient";

export default {
  data() {
    return {};
  },
  methods: {
    getData() {
      // 简写
      //this.$http.get(" xxx",{sourcetype:9}).then(res=>{})
      this.$http({
        method: "get",
        parmas: {
          sourcetype: 9
        },
        url: "/dt/sh/Home/FlashSaleRequest?"
        // https://api1.34580.com/sh/Home/FlashSaleRequest?sourcetype=9
      }).then(function(response) {
        console.log(response);
        console.log(response.data.Data);
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
import './src/assets/css/normal.css'
import './src/assets/css/style.less'

import Vue from 'vue'
import LiuYuChen from "./src/components/LiuYuChen";
new Vue({
  el:"#app",
  template:`<div id="app">
              <liu-yu-chen/>
            </div>`,
  data:{
    message:"你好啊，刘予琛！"
  },
  components:{LiuYuChen}
});
import './src/assets/css/normal'
import './src/assets/css/style'

import Vue from 'vue'
import APP from "./src/APP";
new Vue({
  el:"#app",
  template:'<APP/>',
  components:{
    APP
  }
});
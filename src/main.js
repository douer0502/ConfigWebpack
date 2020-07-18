import './assets/css/normal'
import './assets/css/style'

import Vue from 'vue'
import APP from "./APP";
new Vue({
  el:"#app",
  template:'<APP/>',
  components:{
    APP
  }
});
const Vue = require('vue');
const Date = require('vue!./components/date.vue');

new Vue({
   el:"#app",
   data:{
       test:"Hello"
   },
   components:{
       pelkDate:Date,
   }
});
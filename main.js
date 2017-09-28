let app = new Vue({
   el: '#app',
   data: {
      user: 'John deo',
   },
   
   computed: {
      userStatus: function() {
         return this.user + ' logged in at ' + new Date().toLocaleString();
      }
   }
});
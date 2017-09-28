let app = new Vue({
   el: '#app',
   data: {
      width: 200,
      height: 200,
   },
   
   computed: {
      area: function() {
         return this.width * this.height;
      }
   },
});
let app = new Vue({
   el: '#app',
   data: {
      msg: 'Hello world',
   },
   
   computed: {
      reverseMsg: function() {
         return this.msg.split('').reverse().join('');
      }
   }
});
let app = new Vue({
   el: '#app',
   data: {
       user: 'nivin',
       email: 'nivin@in.com',
   },
   
   computed: {
      userDetails: function() {
         return this.user + ' ' + this.email;
      }
   },
});
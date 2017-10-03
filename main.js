let user = new Vue({
   el: '#user',
   data: {
      firstName: 'John',
      lastName: 'Deo',
   },
   
   computed: {
      fullName: function() {
         return this.firstName + ' ' + this.lastName;
      }
   }
});
let app = new Vue({
   el: '#app',
   data: {
      firstName: 'John',
      lastName: 'Deo',
      fullName: 'John Deo',
   },
   
   watch: {
      firstName: function(newFirstName) {
         this.fullName = newFirstName + ' ' + this.lastName;
      },
      
      lastName: function(newLastName) {
         this.fullName = this.firstName + ' ' + newLastName;
      }
   }
});
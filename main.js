let user = new Vue({
   el: '#user',
   data: {
      firstName: 'John',
      lastName: 'Deo',
   },
   
   computed: {
      fullName: {
         get: function() {
            return this.firstName + ' ' + this.lastName;
         },
         
         set: function(newFullName) {
            let fullName = newFullName.split(' ');
            this.firstName = fullName[0]; // Anjela
            this.lastName = fullName[1]; // John
         }
      }
   }
});
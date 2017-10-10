let app = new Vue({
   el: '#app',
   data: {
      user: {
         email: '',
         password: '',
      },
      notify: '',
      isSignedIn: false,
   },
   
   methods: {
      signin: function() {
         if(this.user.email == 'email@example.com' && this.user.password == 'pass') {
            this.isSignedIn = true;
            return this.notify = 'Done! You are successfully signed in';
         }
         
         return this.notify = 'Oops! Invalid sign in credentials. Please try again';
      }
   }
})
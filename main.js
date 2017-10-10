let app = new Vue({
   el: "#app",
   data: {
      user: {
         email: '',
         password: '',
      },
      notify: '',
      isLogedIn: false,
   },
   
   methods: {
      logIn: function() {
         if(this.user.email == 'xyz@in.com' && this.user.password == '12345') {
            this.isLogedIn = true;
            return this.notify = 'You are successfully logged in';
         }
         return this.notify = 'Sorry, wrong credentials!';
      }
   }
  
   
})
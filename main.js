let app = new Vue({
   el: '#chat',
   data: {
      chats: [],
      message: '',
      notify: '',
   },
   
   methods: {
      send: function() {
         
         if (!this.message) {
            return this.notify = 'Please enter any message';
         }
         
         this.chats.push(this.message);
         
         // Form clear
         this.notify = '';
         this.message = '';
      }
   }
});
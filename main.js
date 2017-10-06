let app = new Vue({
   el: '#app',
   data: {
      items: [
         { id: 1, msg: 'Good morning' },
         { id: 2, msg: 'Good afternone' },
         { id: 3, msg: 'Good evening' },
         { id: 4, msg: 'Good night' },
      ],
      user: {
         name: 'John Deo',
         email: 'john@example.com',
         phone: '9876543210',
         age: 21,
      }
   },
});
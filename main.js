Vue.component('wish', {
   props: ['wish'],
   template: '<li v-if="wish.id != 2">{{ wish.msg }}</li>',
});

let app = new Vue({
   el: '#app',
   data: {
      wishes: [
         { id: 1, msg: 'Good morning' },
         { id: 2, msg: 'Good afternone' },
         { id: 3, msg: 'Good evening' },
         { id: 4, msg: 'Good night' },
      ],
   },
});
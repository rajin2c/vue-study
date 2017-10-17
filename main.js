
// Components
Vue.component('counter', {
   props: ['defaultLike'],
   computed: {
      like: function() {
         return this.defaultLike * 2;
      }
   },
   template: '<div><p>Likes: {{ like }}</p></div>',
});

// Instance
let app = new Vue({
   el: '#app',
   data: {
      initialLike: 0,
   },
   
   methods: {
      increaseLike: function() {
         this.initialLike++;
      }
   }
});


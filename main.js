
// Components
Vue.component('counter', {
   props: ['defaultLike'],
   data: function() {
      return {
         like: this.defaultLike,
      }
   },
   template: '<div><p>Likes: {{ like }}</p><button @click="like++">Like</button></div>',
});

// Instance
let app = new Vue({
   el: '#app',
});


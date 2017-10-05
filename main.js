Vue.component('list', {
   template: '<ul class="a b"><li>Mango</li><li>Apple</li><li>Pappaya</li></ul>'
});

let app = new Vue({
   el: '#app',
   data: {
      isActive: true,
   }
});
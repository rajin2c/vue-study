
// Components
let test = {
   props: ['num1', 'num2'],
   template: '<div><p>{{ typeof num1 }}</p><p>{{ typeof num2 }}</p></div>',
};

// Instance
let app = new Vue({
   el: '#app',
   components: {
      'test': test,
   },
});


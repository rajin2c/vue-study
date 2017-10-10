Vue.config.keyCodes.arrows = [37, 38, 39, 40];

let keyboard = new Vue({
   el: '#keyboard',
   
   methods: {
      msg: function() {
         alert('You are pressed a arrow key!');
      },
   }
});
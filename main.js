Vue.config.keyCodes.numkeys = [112,113,114,115,116,117,118,119,120];

let keyBoard = new Vue({
   el: '#keyBoard',
   
   methods: {
      msg: function() {
         alert('You are pressed a num key!');
      },
   }
});
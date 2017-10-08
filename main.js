let greet = new Vue({
   el: '#greet',
   data: {
      user: {
         name: 'John Deo',
      },
   },
   
   methods: {
      greet: function(name, event) {
         alert('Hi ' + name);
         
         if(event) {
            alert(event.target.tagName);
         }
      }
   }
});
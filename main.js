let film = new Vue({
   el: '#film',
   data: {
      name: 'Robot',
      director: 'Shankar',
   },
   
   computed: {
      filmDetails: function() {
         return this.name + '-' + this.director ;
      },
   }
});
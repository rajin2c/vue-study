let film = new Vue({
   el: '#film',
   data: {
      name: 'Parava',
      director: 'Soubin Thahir',
      details: 'Parava - Soubin Thahir',
   },
   
   watch: {
      name: function(newFilmName) {
         this.details = newFilmName + '-' + this.director;
      },
      
      director: function(newDirectorName) {
         this.details = this.name + '-' + newDirectorName;
      }
   }
});
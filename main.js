let film = new Vue({
   el: '#film',
   data: {
      name: 'vandanam',
      director: 'unknown',
   },
   
   computed: {
      filmDetails: { 
         
         get: function() {
            return this.name + ' ' + this.director;
         },
         
         set: function(newFilmDetails) {
            let filmDetails = newFilmDetails.split(' ');
            this.name = filmDetails[0];
            this.director = filmDetails[1];
         }
         
      }
   }
});
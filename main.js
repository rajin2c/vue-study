let ansme = new Vue({
   el: '#ansme',
   data: {
      question: '',
      answer: 'Please ask any question',
   },
   
   watch: {
      question: function(question) {
         this.answer = 'Waiting for stop typing...',
         this.getAnswer();
      }
   },
   
   methods: {
      getAnswer: _.debounce(
         function() {
            let hasQuestionMark = (this.question.indexOf('?') == -1) ? false : true;
            
            if (!hasQuestionMark) {
               this.answer = 'Please put a question mark';
               return;
            }
            
            this.answer = 'Thinking...';
            let self = this;
            
            axios.get('https://yesno.wtf/api')
            
               .then(function(response) {
                  self.answer = _.upperCase(response.data.answer);
               })
               
               .catch( function(error) {
                  self.answer = 'Unable to process. Please try again later';
               });
         }
      , 1000)
      
   }
});
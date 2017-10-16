
// Components
let header = {
   data: function() {
      return {
         title: 'This is a heading',
      }
   },
   template: '<div class="title"><h1>{{title}}</h1></div>',
};

let content = {
   props: ['contentData'],
   template: '<div><p>{{ contentData }}</p></div>',
};

let footer = {
   props: ['copyrightDate'],
   template: '<div><p>Copyright @ {{ copyrightDate }}</p></div>',
};

// Instance
let site = new Vue({
   el: '#site',
   data: {
      copyright: {
         date: 2019,
      }
   },
   components: {
      'site-header': header,
      'site-content':content,
      'site-footer': footer,
   },
});


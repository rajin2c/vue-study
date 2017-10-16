
// Components
let header = {
   template: '<div class="title"><h1>This is a heading</h1></div>',
};

let content = {
   template: '<div><p>Content area</p></div>',
};

let footer = {
   template: '<div><p>Copyright @ 2017</p></div>',
};

// Instance
let site = new Vue({
   el: '#site',
   components: {
      'site-header': header,
      'site-content':content,
      'site-footer': footer,
   },
});


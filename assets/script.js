var app = new Vue({
    el: '#root',
    data: {
      
        message:"ciao boolean",

        images:"",

        text:"initial_text"
    },

    methods: {

        click: function(){
           return this.text="text_format", this.images="bg_img"
        }
    },
    
  });

  
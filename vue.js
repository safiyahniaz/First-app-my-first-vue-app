 new Vue({
    el: '#MyApp',
    data: {
      'name': 'type your name',
     'fruits_list': ['orange','apple', 'pear'],
     'hobby': 'cycling',
    },
    methods: {
        buttonClick: function () {
            alert("Hey " +this.name);
        },
        greet: function () {
            return 'Good Morning'
        }
    }
  })
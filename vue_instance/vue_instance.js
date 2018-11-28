var  vm = new Vue({
    el: '#vue_det',
    data: {
       firstname : "abc",
       lastname  : "def",
       address    : "xyz"
    },
    methods: {
       mydetails : function() {
          return "I am "+this.firstname +" "+ this.lastname;
       }
    }
 })
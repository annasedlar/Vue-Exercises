new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    effect: {
      height: "100px",
      width: "100px",
      backgroundColor: "purple"
    },
    hi:{
      pinkBackgroundClass: true,
      yellowBackgroundClass: false,
      orangeBackgroundClass: false
    },
    float: 'float',
    placeholder: "Enter a Class",
    userClass: 'test',
    isVisible: true,
    myStyle: {
        width: '100px',
        height: '150px',
        backgroundColor: 'gray'
      },
    progressBar: {
      width: '0px',
      backgroundColor: 'red',
      height: "50px"
    }
  },
  methods: {
    startEffect: function() {
    var vm = this;
      var interval = setInterval(function() {
        vm.hi.pinkBackgroundClass = !vm.hi.pinkBackgroundClass;
        vm.hi.yellowBackgroundClass = !vm.hi.yellowBackgroundClass;
      }, 1000);
    },
    stopEffect(){
      this.hi.pinkBackgroundClass = false;
      this.hi.yellowBackgroundClass = false;
      this.hi.orangeBackgroundClass = true;
    },
    startProgress: function() {
      var vm = this;
      var width = 0;
      console.log("progess started")
      setInterval(function() {
        width = width + 10;
        vm.progressBar.width = width + 'px';
        }, 500);
    }
  }
});
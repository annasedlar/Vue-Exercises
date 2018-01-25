new Vue({
        el: '#exercise',
        data: {
            value: 'hi',
            value2: ''
        },
        methods: {
            alertMe: function(){
                alert("yo")
            },
            keyDown: function(){
                // event.preventDefault()
                this.value = event.target.value
                console.log("Value 1: " + this.value)
            },
            enter: function() {
                this.value2 = event.target.value
                console.log("Value 2: " + this.value2)
            }
        }
    });
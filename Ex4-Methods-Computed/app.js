new Vue({
        el: '#exercise',
        data: {
            value: 0,
            color: "green",
            attachRed: true,
            width: '100px',
            height: '100px',
            border: '1px solid black'
        },
        computed: {
            result(){
                return this.value >= 37 ? 'done' : 'not there yet'
                // if(this.value < 37){
                //     return "Not to 37 yet"
                // } else {
                //     return "Done @37"
                // }
            },
            myStyle(){
                return {
                    border: this.border,
                    width: this.width + 'px',
                    backgroundColor: this.color
                }
            }
        },
        watch: {
            result(){
                let vm = this;
                setTimeout(function() {
                    vm.value = 0;
                }, 1000);
            }   
        }
    });

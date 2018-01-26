<template>
    <div>
        <div class="col-xs-6" id="lefty">
            <p v-if="!server">Please select a server</p>
            <p v-else>Server #{{ server.id}}: {{server.status}}</p></p>
        </div>
        <div class="col-xs-6" id="righty">
            <button @click="changeStatus">Change Status to Normal</button>
        </div>
    </div>
</template>

<script>
import { serverBus } from '../../main.js'

export default {
    data(){
        return {
            server: null
        }
    },
    methods: {
        changeStatus(){
            this.server.status = "Normal";
            // We don't need to pass it back to the bus because
            // objects are reference types - ONE object in memory
            // so it edits the one, true thing
        }
    },

    // lifecycle hook used when using an event bus
    created() {
        serverBus.$on('serverSelected', (server) =>{
            this.server = server
        })
    }
}
</script>

<style>

#righty {
    float:right;
    width: 20%
}
#lefty {
    width: 30%
}

</style>

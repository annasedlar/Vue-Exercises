<template>
    <div class="col-xs-6">
        <ul class="list-group">
        <server v-for="server in servers"
                :server="server"></server>
        </ul>
    </div>
</template>

<script>
import Server from './Server.vue';

export default{
    data(){
        return {
            servers:[ 
                {id: 1, status: 'Critical'},
                {id: 2, status: 'Critical'},
                {id: 3, status: 'Unknow'},
                {id: 4, status: 'Normal'},
                {id: 5, status: 'Critical'} 
            ]
        }
    },
    methods: {
        changeStatus(){
            console.log("change status: ")
        
        }
    },
    components: {
        Server
    }
}


</script>

<style>

</style>

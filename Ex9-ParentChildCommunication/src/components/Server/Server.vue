<template>
    <li
        class="list-group-item"
        @click="changeStatus">
            Server #{{server.id}}
    </li>
</template>

<script>

import { serverBus } from '../../main.js'

export default {
   props: ['server'],
   methods: {
       changeStatus(){
           console.log('change status')
           console.log('server selected ' + this.id)
           serverBus.$emit('serverSelected', this.server)
       }
   }
}


</script>

<style>

</style>

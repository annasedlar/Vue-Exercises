<template>
    <div>
        <header></header>
        <server-list></server-list>
        <footer></footer>
    </div>
</template>

<script>

import Header from './Header.vue'
import Footer from './Footer.vue'
import ServerList from './ServerList.vue'

export default {
    components: {
        // 'header': Header
        // 'server-list': ServerList
        // 'footer': Footer

        // ES6 way below
        Header,
        ServerList,
        Footer
    }
}
</script>
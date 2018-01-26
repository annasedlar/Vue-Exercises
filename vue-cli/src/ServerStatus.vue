<template>
  <div id="app">
    <h1>Hello World!</h1>
    <p>Server Status: {{status}}</p>
    <button @click="changeStatus">Change Status to Normal</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      status: 'Critical'
    }
  },
  methods: {
      changeStatus(){
          this.status = "Normal"
      }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

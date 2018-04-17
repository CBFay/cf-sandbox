<template>
  <div id="app">
    <cf-sandbox></cf-sandbox>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
body {
  margin: 0px;
}
[class*=cf] {
  font-family: "Open Sans", Helvetica, Arial, "Liberation Sans", sans-serif; 
}
#app *:focus {
  outline: rgba(0, 0, 0, 1);
}
#app {
  background-color: #FAFAFA;
  margin: 0px;
  height: 100vh;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 75px 0px 0px 75px;
}
</style>

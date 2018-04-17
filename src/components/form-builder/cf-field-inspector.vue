<template>
  <div id="cf-inspector">
    <form>
      <cf-field-text></cf-field-text>
    </form>
  </div>
</template>

<script>
  export default {}

</script>

<style>
  h3 {
    width: 300px;
    text-align: center;
    color: #2B3237;
    margin-left: auto;
    margin-right: auto;
  }
  #cf-inspector {
    background-color: #ccd8e2;
  }
  #cf-inspector-window {
    font-family: "Open Sans", Helvetica, Arial, "Liberation Sans", sans-serif; 
    font-weight: bold;
    width: 350px;
    height: 300px;
    background-color: #ccd8e2;
  }
  .builder {
    position: fixed;
    top: 0px;
    right: 0px;
    width: 400px;
    height: 200vh;
    background-color: #ccd8e2;
  }
  .module {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px;
  }
  
</style>

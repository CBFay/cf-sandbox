<template>
  <div class="cf builder">

    <div class="cf module-wrapper">
      <h3>COMMON FIELDS</h3>
      <div class="cf module common-fields">
        <cf-builder-button type="text" :pushField=pushField></cf-builder-button>
        <cf-builder-button type="textarea" :pushField=pushField></cf-builder-button>
        <cf-builder-button type="checkbox" :pushField=pushField></cf-builder-button>
        <cf-builder-button type="submit" :pushField=pushField></cf-builder-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      pushField: {
        // appends a component to cf-form.fields 
        type: Function
      },
    },
    data() {
      return {

      }
    }
  }
</script>

<style>
  h3 {
    width: 300px;
    text-align: center;
    color: #2B3237;
    margin-left: auto;
    margin-right: auto;
  }
  .builder {
    position: fixed;
    top: 0px;
    right: 0px;
    width: 400px;
    height: 200vh;
    background-color: #ccd8e2;
    /* background-color: #32373B; */
  }
  .module {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px;
  }
</style>

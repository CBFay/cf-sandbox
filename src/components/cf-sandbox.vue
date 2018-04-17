<template>
  <!-- sandbox -->
    <div id="cf-sandbox">
      
      <!-- form -->
        <form class="cf-form-body">
          <h1 id="cf-form-title">{{ title }}</h1>

          <!-- this element prevents unexpected behavior
          caused by single field forms. -->
          <input id="cf-hiddenfield" type="text">

          <div v-for="(field, index) in fields">
            <component :is=field.tag :settings=field.settings :ref=index></component>
          </div>
        </form> 

      <!-- builder -->
        <button id="cf-add-field">&#xe035;</button>
        <!-- <cf-field-inspector></cf-field-inspector> -->
        <cf-form-builder :pushField=pushField></cf-form-builder>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Example Form',
        // Fields are contained as an array of objects 
        fields: new Array(
          /* Fields should be Objects instead of Strings,
           * because Objects retain the flexibility to conain
           * data other than the tag. */
          'cf-field-text',
          {tag: 'cf-field-text', settings: {label: 'First Name'} },
          {tag: 'cf-field-text', settings: {label: 'Last Name'} },
          {tag: 'cf-field-textarea', settings: {label: 'My Story'} },
          {tag: 'cf-field-checkbox', settings: {label: 'Do you Agree?'}},
          {tag: 'cf-field-submit', settings: {label: 'Submit'}},
        ),
      }
    },
    methods: {
      pushField: function(component) {
        this.$data.fields.push(component);
      },
      removeField: function(index) {
        this.$data.fields.splice(index, 1);
      },
      viewInspector: function() {
        this.$refs.cf_inspector_button.style.display = block;
      }
    }
  }
</script>

<style>
  #cf-form-title {
    color: #555;
    margin: 10px 10px 40px 20px;
    font-weight: normal;
  }
  .cf-component {
    margin: 20px !important;
  }
  .cf-form-body {
    width: 600px;
    padding: 10px;
  }
  #cf-hiddenfield {
    display: none;
  }
  [class*=field-icon-edit] {
    visibility: hidden;
    display: inline;
    position: relative;
    top: 5px;
    right: 64px;
    font-family: "dripicons-v2";
    font-size: 20px;
    width: 40px;
    height: 40px;
    margin: 1px;
    border-width: 1px;
    border-radius: 5px;
    border: none;
    color: #AAA;
  }
  [class*=component]:hover [class*=field-icon-edit] {
    visibility: visible;
  }
  [class*=icon]:hover {
    color: #199fff;
  }
  [class*=textarea-field-icon-edit] {
    top: 15px;
  }
  [class*=checkbox-field-icon-edit] {
    z-index: 2;
    position: relative;
    right: -244px;
    background: none;
    /* display: inline; */
  }
  #cf-add-field {
    z-index: 1;
    position: fixed;
    right: 350px;
    top: 25px;
    font-family: "dripicons-v2";
    font-size:64px;
    width: 100px;
    height: 100px;
    border: none;
    border-radius: 100px;
    background-color: #199fff;
    color: #FFF;
  }
  #cf-add-field:hover {
    box-shadow: 0px 0px 20px 5px #AAA;
  }
</style>
<template>
  <button class="cf-build-button-wrapper" v-on:click.prevent="push">
    <div class="cf build-button-icon" v-html=type_data[local_type].icon></div><div class="cf build-button-text">{{ type_data[local_type].name }}</div>
  </button>
</template>

<script>

  export default {
    props: {
      type: {
        type: String,
        required: true,
      },
      pushField: {
        type: Function
      }
    },
    data() {
      return {
        type_data: {
          "text": {
            name: "Single Line Text",
            icon: "&#xe021;",
            tag: 'cf-field-text',
          },
          "textarea": {
            name: "Paragraph Text",
            icon: "y",
            tag: "cf-field-textarea",
          },
          "checkbox": {
            name: "Checkbox",
            icon: "S",
            tag: "cf-field-checkbox",
          },
          "submit": {
            name: "Submit Button",
            icon: "&#xe055;",
            tag: "cf-field-submit",
          }
        },
        local_type: this.type,
        local_onclick: this.onclick,
      }
    },
    methods: {
      generateOptions: function() {
        return {
          tag: this.type_data[this.local_type].tag,
          settings: {
            label: this.type_data[this.local_type].name
          }
        }
      },
      push: function() {
        // append the a field to the form with a type corresponding to local_type
        this.pushField(this.generateOptions());
      }
    }
  }
</script>

<style scoped>
  .cf .cf-build-button-wrapper {
    background: none;
    height: 50px;
    margin: 10px;
    border: none;
    flex: none;
  }
  .cf-build-button-wrapper:hover [class*=build-button-text]  {
    color: #FFF;
  }
  .cf-build-button-wrapper:hover [class*=build-button-icon]  {
    font-size: 24px;
    color: #3CA3DC;
  }
  .build-button-text {
    position: relative;
    top: -52px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
    background-color: #3B454E;
    font-size: 16px;
    font-weight: bold;
    width: 200px;
    height: 50px;
    border-radius: 5px;
    border: none;
    padding: 0px 0px 0px 50px;
    transition: color .3s;
  }
  .build-button-icon {
    font-family: "dripicons-v2";
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
    background-color: #2B3237;
    width: 50px;
    height: 50px;
    font-size: 20px;
    position: relative;
    top: -2px;
    left: 0px;
    border-radius: 5px 0px 0px 5px;
    transition: font-size .3s;
    transition: color .3s;
  }
  .text {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: bolder;
    font-size: 24px;
    text-decoration: underline;
  }
</style>

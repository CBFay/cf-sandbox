<template>
  <div class="cf-component">
    <input type="submit" :value=local_label :action=local_action :target=local_target :method=local_method :disabled=local_disabled></input>
  </div>
</template>

<script>
  export default {
    props: {
      settings: {
        type: Object,
        required: true,
      },
    },
    /* data is included with props, because parent props can't be
     * mutated locally without affecting children. Use data instead. */
    data() {
      return {
        local_tag: this.tag,
        local_settings: this.settings,
        local_label: this.settings.label, 
        local_required: '',
        local_description: '',

        // type specific data
        local_action: '',
        local_target: '',
        local_method: '',
        local_disabled: false,
      }
    }
  }
</script>

<style scoped>
  .cf-component {
    margin: 10px;
  }
  .cf-component input {
    color: #FFF;
    background-color: #23282D;
    font-weight: 900;
    height: 40px;
    margin: 10px;
    padding: 0px 25px 0px 25px;
    font-size: 14px;
    border-radius: 4px;
    transition: background-color .3s;
    -webkit-transition: background-color .3s; /* Safari */
  }
  .cf-component input:hover {
    background-color: #3CA3DC;
    background-color: #777;
  }
  .cf-component input:disabled {
    background-color: #CCC;
  }
</style>
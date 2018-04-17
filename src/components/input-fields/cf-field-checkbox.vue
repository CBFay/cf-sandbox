<template>
  <div class="cf-component">
    <div class="checkbox-wrapper">
      <input type="checkbox" :required=local_required>
        <span class="label">{{ local_label }}</span>
        <span class="errormessage">{{ local_description }}</span>
      </input>
      <button class="cf checkbox-field-icon-edit">&#xe020;</button>
    </div>
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
        
      }
    }
  }
</script>

<style scoped>
  .cf-component {
    margin: 10px;
  }
  .cf-component .label {
    font-weight: bold;
  }
  .cf-component input {
    appearance: default;
    color: #333;
    width: 14px;
    height: 14px;
    margin: 0px 10px 0px 10px;
    font-size: 16px;
    padding: 0px 0px 0px 10px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  .cf-component input:hover {
    cursor: pointer;
  }
</style>


import Vue from 'vue'
import App from './App.vue'
import cf_sandbox from './components/cf-sandbox.vue'
import cf_field_text from './components/input-fields/cf-field-text.vue'
import cf_field_textarea from './components/input-fields/cf-field-textarea.vue'
import cf_field_checkbox from './components/input-fields/cf-field-checkbox.vue'
import cf_field_submit from './components/input-fields/cf-field-submit.vue'
import cf_form_builder from './components/form-builder/cf-form-builder.vue'
import cf_builder_button from './components/form-builder/cf-builder-button.vue'
import cf_field_inspector from './components/form-builder/cf-field-inspector.vue'

Vue.component('cf-sandbox', cf_sandbox);
Vue.component('cf-field-text', cf_field_text);
Vue.component('cf-field-textarea', cf_field_textarea);
Vue.component('cf-field-checkbox', cf_field_checkbox);
Vue.component('cf-field-submit', cf_field_submit);
Vue.component('cf-form-builder', cf_form_builder);
Vue.component('cf-builder-button', cf_builder_button);
Vue.component('cf-field-inspector', cf_field_inspector);

new Vue({
  el: '#app',
  render: h => h(App)
})

// var inspector = document.querySelector('#cf-inspector');
// var btn = document.querySelector('#cf-inspector-button');
// var close = document.querySelector('#cf-close');

// btn.onclick = function() {
//   inspector.style.display = 'block';
// }
// close.onclick = function() {
//   inspector.style.display = 'none';
// }
// window.onclick = function(event) {
//   if (event.target == inspector) {
//     inspector.style.display = 'none';
//   }
// }
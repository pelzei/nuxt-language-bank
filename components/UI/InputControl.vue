<template>
  <div class="m-3">
    <label class="block font-bold"><slot /></label>
    <input
      class="block w-full border-solid border-slate-500 border-2 p-1 focus:bg-slate-300 focus:outline-none"
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <textarea
      class="block w-full border-solid border-slate-500 border-2 p-1 focus:bg-slate-300 focus:outline-none"
      v-if="controlType === 'textarea'"
      rows="10"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'InputControl',
  props: {
    controlType: {
      type: String,
      default: 'input',
    },
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

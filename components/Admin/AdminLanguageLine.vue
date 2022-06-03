<template>
  <nuxt-link :to="'/admin/languages/' + langkey">
    <p class="text-base py-1">▪️ {{ langname }} ({{ langcode }})</p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    langkey: {
      type: String,
      required: true,
    },
    langname: {
      type: String,
      required: true,
    },
    langcode: {
      type: String,
      required: true,
    },
  },
}
</script>

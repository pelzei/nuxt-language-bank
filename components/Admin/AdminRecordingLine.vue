<template>
  <nuxt-link :to="'/admin/recordings/' + recKey">
    <p class="text-base py-1">▪️ {{ name }} ({{ langcode }})</p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    recKey: {
      type: String,
      required: true,
    },
    name: {
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

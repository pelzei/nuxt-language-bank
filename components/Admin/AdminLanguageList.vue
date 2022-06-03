<template>
  <div>
    <p class="font-bold">Pick a language to update:</p>
    <AdminLanguageLine
      v-for="language in allLanguages"
      :key="language.id"
      :langkey="language.id"
      :langcode="language.langcode"
      :langname="language.langname"
      class="py-2"
    />
  </div>
</template>

<script>
import AdminLanguageLine from '~/components/Admin/AdminLanguageLine.vue'

export default {
  components: {
    AdminLanguageLine,
  },
  props: {
    allLanguages: {
      type: Array,
      required: true,
    },
  },
}
</script>

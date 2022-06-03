<template>
  <div class="p-5 flex justify-center">
    <LangForm @submit="onSubmit" class="md:max-w-md lg:max-w-lg" />
  </div>
</template>

<script>
import LangForm from '~/components/Admin/LangForm.vue'

export default {
  components: {
    LangForm,
  },
  methods: {
    onSubmit(postData) {
      this.$store
        .dispatch('addLanguage', postData)
        .then(() => this.$router.push('/admin'))
    },
  },
}
</script>

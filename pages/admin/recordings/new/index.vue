<template>
  <div class="p-5 flex justify-center">
    <RecForm @submit="onSubmit" class="md:max-w-md lg:max-w-lg" />
  </div>
</template>

<script>
import RecForm from '~/components/Admin/RecForm.vue'

export default {
  components: {
    RecForm,
  },
  methods: {
    onSubmit(postData) {
      this.$store
        .dispatch('addRecording', postData)
        .then(() => this.$router.push('/admin'))
    },
  },
}
</script>

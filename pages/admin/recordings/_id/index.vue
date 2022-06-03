<template>
  <div class="flex justify-center">
    <RecForm :recording="loadedPost" class="md:max-w-md lg:max-w-lg" />
  </div>
</template>

<script>
import RecForm from '~/components/Admin/RecForm.vue'

export default {
  components: {
    RecForm,
  },
  data() {
    return {
      loadedPost: {},
    }
  },
  onSubmit(postData) {
    this.$store
      .dispatch('editRecording', postData)
      .then(() => this.$router.push('/admin'))
  },
  created() {
    this.loadedPost = this.$store.getters.getRecordings.find(
      (recording) => recording.id === this.$route.params.id
    )
  },
}
</script>

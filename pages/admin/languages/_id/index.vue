<template>
  <div class="flex justify-center">
    <LangForm
      :language="loadedPost"
      class="md:max-w-md lg:max-w-lg"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import LangForm from '~/components/Admin/LangForm.vue'

export default {
  components: {
    LangForm,
  },
  data() {
    return {
      loadedPost: {},
    }
  },
  methods: {
    onSubmit(postData) {
      this.$store
        .dispatch('editLanguage', postData)
        .then(() => this.$router.push('/admin'))
    },
  },
  created() {
    this.loadedPost = this.$store.getters.getLanguages.find(
      (language) => language.id === this.$route.params.id
    )
    console.log(this.loadedPost)
  },
}
</script>

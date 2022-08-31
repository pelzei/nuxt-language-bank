<template>
  <form
    @submit.prevent="onSave"
    class="w-3/4 bg-gray-300 border rounded text-sm m-8"
  >
    <p v-if="post.id" class="px-4 py-2">
      <span class="font-bold">Post ID:</span> {{ post.id }}
    </p>
    <InputControl v-model="post.langcode">Language code</InputControl>
    <InputControl v-model="post.langname"
      >Language name in English</InputControl
    >
    <InputControl v-model="post.langname_native"
      >Language name in native language</InputControl
    >
    <InputControl v-model="post.langfamily">Language family</InputControl>
    <InputControl v-model="post.nativespeakers"
      >Native speakers (number)</InputControl
    >
    <InputControl v-model="post.nativespeakerssource"
      >Native speakers (source)</InputControl
    >
    <InputControl v-model="post.official">Official in</InputControl>
    <InputControl v-model="post.mostspoken">Most spoken in</InputControl>
    <InputControl control-type="textarea" v-model="post.article"
      >Article</InputControl
    >
    <div class="flex justify-center">
      <AppButton type="button" class="m-3" btn-style="cancel" @click="onCancel"
        >Cancel</AppButton
      >
      <AppButton type="submit" class="m-3" :disabled="true">Save</AppButton>
    </div>
    <div class="flex justify-center m-3 p-3 bg-yellow-300 rounded-md">
      <p>Save button has been disabled, since this is only a demo version.</p>
    </div>
  </form>
</template>

<script>
import AppButton from '~/components/UI/AppButton.vue'
import InputControl from '~/components/UI/InputControl.vue'

export default {
  components: {
    AppButton,
    InputControl,
  },
  props: {
    language: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      post: this.language
        ? { ...this.language }
        : {
            langcode: '',
            langname: '',
            langname_native: '',
            langfamily: '',
            nativespeakers: '',
            nativespeakerssource: '',
            official: '',
            mostspoken: '',
            article: '',
          },
    }
  },
  methods: {
    onSave() {
      this.$emit('submit', this.post)
    },
    onCancel() {
      this.$router.push('/admin')
    },
  },
}
</script>

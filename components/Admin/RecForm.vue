<template>
  <form
    @submit.prevent="onSave"
    class="w-3/4 bg-gray-300 border rounded text-sm m-8"
  >
    <p v-if="post.id" class="px-4 py-2">
      <span class="font-bold">Post ID:</span> {{ post.id }}
    </p>
    <InputControl v-model="post.langcode">Language code</InputControl>
    <InputControl v-model="post.name">Name of language variety</InputControl>
    <InputControl v-model="post.speaker_name">Name of speaker</InputControl>
    <InputControl v-model="post.age">Age at recording</InputControl>
    <InputControl v-model="post.year">Year at recording</InputControl>
    <InputControl v-model="post.geo_name"
      >Geographical reference (name)</InputControl
    >
    <InputControl v-model="post.geo_url"
      >Geographical reference (url)</InputControl
    >
    <InputControl v-model="post.transcription"
      >Transcription method</InputControl
    >
    <InputControl v-model="post.recording">Recording (url)</InputControl>
    <InputControl control-type="textarea" v-model="post.text"
      >Text (original)</InputControl
    >
    <InputControl control-type="textarea" v-model="post.transtext"
      >Text (transcribed)</InputControl
    >
    <InputControl v-model="post.direction">Left-ro-right? (y/n)</InputControl>

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
    recording: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      post: this.recording
        ? { ...this.recording }
        : {
            langcode: '',
            name: '',
            speaker_name: '',
            age: '',
            year: '',
            geo_name: '',
            geo_url: '',
            transcription: '',
            recording: '',
            text: '',
            transtext: '',
            direction: '',
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

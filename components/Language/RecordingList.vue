<template>
  <div class="flex flex-wrap flex-row justify-center">
    <RecordingDetails
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :name="post.name"
      :speaker="post.speaker_name"
      :age="post.age"
      :year="post.year"
      :geo_name="post.geo_name"
      :geo_url="post.geo_url"
      :transcription="post.transcription"
      :rec_url="post.recording"
      :text="post.text"
      :transtext="post.transtext"
      :direction="post.direction === 'y' ? true : false"
    />
  </div>
</template>

<script>
import RecordingDetails from '~/components/Language/RecordingDetails.vue'

export default {
  components: {
    RecordingDetails,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

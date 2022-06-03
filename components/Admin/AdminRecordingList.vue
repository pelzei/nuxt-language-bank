<template>
  <div>
    <p class="font-bold">Pick a recording to update:</p>
    <AdminRecordingLine
      v-for="recording in allRecordings"
      :key="recording.id"
      :recKey="recording.id"
      :langcode="recording.langcode"
      :name="recording.name"
      class="py-2"
    />
  </div>
</template>

<script>
import AdminRecordingLine from '~/components/Admin/AdminRecordingLine.vue'

export default {
  components: {
    AdminRecordingLine,
  },
  props: {
    allRecordings: {
      type: Array,
      required: true,
    },
  },
}
</script>

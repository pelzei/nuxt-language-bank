<template>
  <div class="flex flex-row justify-center">
    <div class="w-11/12 md:w-2/3 lg:w-1/2 h-max">
      <div class="rounded-xl bg-white pt-4 pb-6 px-8 mb-12">
        <h4 class="text-xl font-bold">{{ name }}</h4>
        <p class="mb-4 text-sm">
          <b class="font-bold">Speaker:</b> <i class="italic">{{ speaker }}</i>
          <b class="font-bold">Age at recording:</b> {{ age }} ({{ year }})
          <span v-if="geo_name !== ''"
            ><b class="font-bold">Geographical reference:</b>
            <a
              :href="geo_url"
              target="_blank"
              rel="noopener noreferrer"
              class="underline decoration-blue-500 decoration-dotted underline-offset-2"
              >{{ geo_name }}
            </a></span
          >
          <span v-if="transcription !== ''"
            ><b class="font-bold"> Transcription method:</b>
            {{ transcription }}</span
          >
        </p>

        <audio controls class="mb-4">
          <source :src="rec_url" type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>

        <p
          :style="!direction ? 'direction: rtl' : 'direction: ltr'"
          class="mb-3"
        >
          {{ text }}
        </p>
        <p v-if="transtext !== ''" class="mb-3">
          <span class="text-xs font-bold">Transcription:</span><br />{{
            transtext
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    speaker: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    geo_name: {
      type: String,
      required: true,
    },
    geo_url: {
      type: String,
      required: true,
    },
    transcription: {
      type: String,
      required: true,
    },
    rec_url: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },
    transtext: {
      type: String,
      required: true,
    },
    direction: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<template>
  <div>
    <LanguageDetails
      :id="id"
      :name="name"
      :nativeName="nativeName"
      :official="official"
      :most="most"
      :source="source"
      :speakers="speakers"
      :family="family"
      :article="article"
    />
    <section class="flex justify-center">
      <RecordingList :posts="selectedRecordings" />
    </section>
  </div>
</template>

<script>
import LanguageDetails from '~/components/Language/LanguageDetails.vue'
import RecordingList from '~/components/Language/RecordingList.vue'

export default {
  components: {
    LanguageDetails,
    RecordingList,
  },
  data() {
    return {
      selectedLanguage: null,
      selectedRecordings: null,
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    name() {
      return this.selectedLanguage.langname
    },
    nativeName() {
      return this.selectedLanguage.langname_native
    },
    family() {
      return this.selectedLanguage.langfamily
    },
    speakers() {
      return this.selectedLanguage.nativespeakers
    },
    source() {
      return this.selectedLanguage.nativespeakerssource
    },
    official() {
      return this.selectedLanguage.official
    },
    most() {
      return this.selectedLanguage.mostspoken
    },
    article() {
      return this.selectedLanguage.article
    },
  },
  created() {
    if (this.$store.getters.getRecordings.length === 0) {
      this.$store.dispatch('fetchRecordings')
    }

    this.selectedLanguage = this.$store.getters.getLanguages.find(
      (language) => language.langcode === this.$route.params.id
    )
    this.selectedRecordings = this.$store.getters.getRecordings.filter(
      (post) => post.langcode === this.$route.params.id
    )
  },
}
</script>

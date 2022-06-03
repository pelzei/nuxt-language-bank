<template>
  <div class="flex justify-around w-full min-h-screen">
    <div class="w-1/3">
      <nuxt-link to="/admin/languages/new">
        <AppButton class="font-bold p-2 m-4 bg-yellow-300 border-yellow-300"
          >Add a new language</AppButton
        ></nuxt-link
      >
      <AppCard>
        <AdminLanguageList :allLanguages="allLanguages" />
      </AppCard>
    </div>
    <div class="w-1/3">
      <nuxt-link to="/admin/recordings/new">
        <AppButton class="font-bold p-2 m-4 bg-yellow-300 border-yellow-300"
          >Add a new recording</AppButton
        ></nuxt-link
      >
      <AppCard>
        <AdminRecordingList :allRecordings="allRecordings" />
      </AppCard>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/UI/AppButton.vue'
import AppCard from '~/components/UI/AppCard.vue'
import AdminLanguageList from '~/components/Admin/AdminLanguageList.vue'

export default {
  components: {
    AppButton,
    AppCard,
    AdminLanguageList,
  },
  computed: {
    allLanguages() {
      return this.$store.getters.getLanguages
    },
    allRecordings() {
      return this.$store.getters.getRecordings
    },
  },
  created() {
    if (this.$store.getters.getRecordings.length === 0) {
      this.$store.dispatch('fetchRecordings')
    }
  },
}
</script>

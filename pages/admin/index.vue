<template>
  <div class="w-full min-h-screen">
    <div class="flex justify-center">
      <div class="w-5/6 md:w-1/2 w-1/3 bg-yellow-300 my-4 p-4 rounded-md">
        <h1>
          This is a demo version and only shows the admin area openly to
          demonstrate it. Any functions to manipulate the database have been
          deactivated.
        </h1>
      </div>
    </div>
    <div class="flex flex-col md:flex-row justify-around">
      <div class="w-5/6 md:w-1/2 lg:w-2/5">
        <nuxt-link to="/admin/languages/new">
          <AppButton class="font-bold p-2 m-4 bg-yellow-300 border-yellow-300"
            >Add a new language</AppButton
          ></nuxt-link
        >
        <AppCard>
          <AdminLanguageList :allLanguages="allLanguages" />
        </AppCard>
      </div>
      <div class="w-5/6 md:w-1/2 lg:w-2/5">
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

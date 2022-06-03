<template>
  <div class="w-full min-h-screen">
    <div class="p-10 flex justify-center">
      <div>
        <input
          type="text"
          v-model="search"
          placeholder="Search language"
          class="p-2 rounded w-80"
        />
      </div>
    </div>
    <section class="flex justify-center">
      <LanguageList :posts="loadedPosts" class="max-w-7xl" />
    </section>
  </div>
</template>

<script>
import LanguageList from '~/components/Language/LanguageList.vue'

export default {
  components: {
    LanguageList,
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.getLanguages.filter((post) =>
        post.langname.toLowerCase().includes(this.search.toLowerCase())
      )
    },
  },
  created() {
    if (this.$store.getters.getRecordings.length === 0) {
      this.$store.dispatch('fetchRecordings')
    } else {
      return
    }
  },
}
</script>

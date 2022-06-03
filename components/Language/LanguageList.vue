<template>
  <div class="flex flex-wrap flex-row justify-center">
    <LanguagePreview
      v-for="post in posts"
      :key="post.langcode"
      :id="post.langcode"
      :img="post.langcode"
      :title="post.langname"
      :text="post.article"
    />
  </div>
</template>

<script>
import LanguagePreview from '~/components/Language/LanguagePreview.vue'

export default {
  components: {
    LanguagePreview,
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

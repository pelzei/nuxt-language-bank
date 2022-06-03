<template>
  <nuxt-link :to="'/languages/' + id + '/'">
    <article class="bg-white rounded m-2 p-2 w-72">
      <div>
        <div>
          <img
            class="w-max h-auto"
            :src="require('@/assets/jpg/' + id + '.jpg')"
          />
          <h1 class="text-base font-black">{{ title }}</h1>
          <p class="text-xs truncate">{{ text }}</p>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
}
</script>

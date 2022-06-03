<template>
  <div class="flex flex-row justify-center">
    <div class="w-11/12 md:w-2/3 lg:w-1/2 h-max">
      <img
        class="w-max h-auto rounded-t-xl mt-8"
        :src="require('@/assets/jpg/' + id + '.jpg')"
      />
      <div class="rounded-b-xl bg-white pt-4 pb-6 px-8 mb-12">
        <h4 class="text-4xl font-bold">{{ name }}</h4>
        <p class="italic mb-2">{{ nativeName }}</p>
        <p class="text-xs mb-2">{{ family }}</p>
        <p class="text-sm">
          <b class="font-bold">Spoken by:</b> {{ speakers }} according to
          {{ source }}
        </p>
        <p class="text-sm">
          <b class="font-bold">Official in:</b> {{ official }}
        </p>
        <p class="text-sm mb-3">
          <b class="font-bold"> Spoken primarily in:</b> {{ most }}
        </p>
        <p>{{ article }}</p>
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
    nativeName: {
      type: String,
      required: true,
    },
    family: {
      type: String,
      required: true,
    },
    speakers: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    official: {
      type: String,
      required: true,
    },
    most: {
      type: String,
      required: true,
    },
    article: {
      type: String,
      required: true,
    },
  },
}
</script>

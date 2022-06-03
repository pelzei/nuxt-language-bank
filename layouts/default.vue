<template>
    <div class="gradient-background">
        <TheHeader />
        <nuxt />
    </div>
</template>

<script>
import TheHeader from "~/components/UI/TheHeader.vue"

export default {
components: {
    TheHeader
}    
}
</script>


<style>
.gradient-background {
  background: rgb(2,0,36);
  background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
}
</style>
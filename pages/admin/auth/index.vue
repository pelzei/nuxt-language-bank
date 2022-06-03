<template>
  <div class="p-5 min-h-screen flex justify-center">
    <form
      class="min-w-64 w-1/2 bg-gray-300 border rounded text-sm m-8 flex-col h-max"
    >
      <InputControl type="email">E-Mail Address</InputControl>
      <InputControl type="password">Password</InputControl>
      <div class="flex-row justify-around">
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          class="m-4"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton
        >
      </div>
    </form>
  </div>
</template>

<script>
import InputControl from '@/components/UI/InputControl'
import AppButton from '@/components/UI/AppButton'

export default {
  layout: 'admin',
  components: {
    InputControl,
    AppButton,
  },
  data() {
    return {
      isLogin: true,
    }
  },
}
</script>

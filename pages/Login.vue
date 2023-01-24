<template>
  <AuthLoginForm />
</template>

<script>
export default {
  name: 'LoginPage',
  layout: "default",
  middleware: "auth",
  auth: "guest",
}
</script>

<style lang="scss" scoped>
.Login {
}
</style>

<script setup lang="ts">
import AuthViewSwitcher from "@/components/AuthViewSwitcher.vue";
import LoginForm from "@/components/LoginForm.vue";
import { ref } from "vue";
import PasswordRecoveryForm from "@/components/PasswordRecoveryForm.vue";

const currentForm = ref('login')
</script>

<template>
  <main class="page-content">
    <div class="container">
      <div class="page-head page-auth__page-head">
        <h1 class="title">Вход и регистрация</h1>
        <AuthViewSwitcher />
      </div>
      <PasswordRecoveryForm v-if="currentForm === 'recovery'" @login="currentForm = 'login'"/>
      <LoginForm v-else @recovery="currentForm = 'recovery'"/>
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>

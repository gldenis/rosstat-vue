<script setup lang="ts">
import IconRegistration from "@/components/icons/IconRegistration.vue";
import AuthViewSwitcher from "@/components/AuthViewSwitcher.vue";
import AdvantagesList from "@/components/AdvantagesList.vue";
import RegistrationForm from "@/components/RegistrationForm.vue";

const formSubmit = () => {

}
</script>

<template>
  <main class="page-content">
    <div class="container">
      <div class="page-head">
        <h1 class="title">Вход и регистрация</h1>
        <AuthViewSwitcher />
      </div>
      <div class="registration__wrapper">
        <RegistrationForm />
        <AdvantagesList />
      </div>
    </div>
  </main>
</template>


<style scoped lang="scss">
.registration__wrapper {
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-top: 80px;

  .auth-form {
    margin-right: 0;
    margin-top: 0;
    margin-left: 0;
    max-width: 340px;
    border-radius: 8px 0 0 8px;
    padding-right: 20px;
  }
}

@media screen and (max-width: $tablet) {

  .registration__wrapper {
    flex-direction: column;
    align-items: center;

    .auth-form {
      max-width: 440px;
      border-radius: 8px 8px 0 0;
      padding: 40px;
    }
  }

  .advantages {
    max-width: 440px;
    border-radius: 0 0 8px 8px;
  }
}

@media screen and (max-width: $mobile-xs) {
  .registration__wrapper {
    .auth-form {
      padding: 40px 20px;
    }
  }
}
</style>

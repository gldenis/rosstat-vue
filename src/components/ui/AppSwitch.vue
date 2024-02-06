<script setup>
defineProps({
  checked: {
    type: Boolean,
    default: false
  },
  label: {
    type: String
  },
  disabled: {
    type: Boolean
  }
})

defineEmits(['toggle'])
</script>

<template>
  <label class="switch" :class="{ 'switch--on': checked, 'switch--off': !checked }">
    <input
      v-bind="$attrs"
      class="switch__input"
      type="checkbox"
      :disabled="disabled"
      :checked="checked"
      :value="checked"
      @change="$emit('toggle', $event.target.checked)"
    />
    <span class="switch__box"></span>
    <span class="switch__label">{{ label }}</span>
  </label>
</template>

<style scoped lang="scss">
.switch {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 5px 7px;

  &--on {
    border: 1px solid #15995A;
  }

  &--off {
    position: relative;

    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background: url("@/assets/img/switch-disabled.png");
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      border-radius: 16px;
    }
  }
}
.switch__label {
  color: #ffffff;
  user-select: none;
}
.switch__input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.switch__box {
  --switch-trigger-off: rgba(255, 255, 255, 0.92);
  --switch-off: rgba(255, 255, 255, 0.2);
  --switch-on: #15995A;
  display: flex;
  align-items: center;
  position: relative;
  width: 42px;
  height: 28px;
  background-color: var(--switch-off);
  flex-shrink: 0;
  border-radius: 16px;
  transition: background-color 0.1s ease-in-out;
}
.switch__box::before {
  content: "";
  position: absolute;
  left: 4px;
  height: 20px;
  width: 20px;
  border-radius: 9999px;
  background-color: white;
  transition: transform 0.1s ease-in-out;
}
.switch__input:checked + .switch__box {
  background-color: var(--switch-on);
}
.switch__input:checked + .switch__box::before {
  transform: translateX(14px);
}
</style>

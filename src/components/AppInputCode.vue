<script setup lang="ts">
import { ref } from "vue";

const props = defineProps(
  {
    length: {
      type: Number,
      default: 4
    }
  }
)
const array = new Array(props.length).fill(0)
const cells = ref(array.map((cell, index) => ({ key: index, value: '' })))
const inputRefs = ref([])
const focusedCellIdx = ref(0)
const focusCellByIndex = (index) => {
  const el = inputRefs.value[index]

  el.focus();
  el.select();
  const focusedValue = el.value
  el.value = ""
  el.value = focusedValue

  focusedCellIdx.value = index
}
const focusPreviousCell = () => {
  if (focusedCellIdx.value === 0) return
  focusCellByIndex(focusedCellIdx.value - 1)
}

const focusNextCell = () => {
  if (focusedCellIdx.value === props.length - 1) return
  focusCellByIndex(focusedCellIdx.value + 1)
}

const onCellErase = (index: number, e: Event): void => {
  const isThisCellFilled = cells.value[index].value.length;

  if (!isThisCellFilled) {
    focusPreviousCell();
    e.preventDefault();
  }
}
const onKeyDown = (e: KeyboardEvent): void => {
  switch (e.keyCode) {
    /* left arrow key */
    case 37:
      focusPreviousCell();
      e.preventDefault()
      break;

    /* right arrow key */
    case 39:
      focusNextCell();
      break;

    default:
      break;
  }
}

const onCellChanged = (e): void => {
  const el = inputRefs.value[focusedCellIdx.value]
  if(!el.value) {
    return
  }
  focusNextCell()
}

</script>

<template>
  <div class="vue-pincode-input-wrapper">
    <input
      v-for="(cell, index) in cells"
      :key="index"
      :ref="el => { if (el) inputRefs[index] = el }"
      v-model.trim="cell.value"
      v-bind="$attrs"
      class="vue-pincode-input"
      type="text"
      maxlength="1"
      @input="onCellChanged"
      @focus="focusedCellIdx = index"
      @keydown.delete="onCellErase(index, $event)"
      @keydown="onKeyDown"
    >
  </div>
</template>

<style scoped lang="scss">
.vue-pincode-input-wrapper {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.vue-pincode-input {
  width: 40px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid rgb(217, 217, 217);
  background: linear-gradient(180deg, rgba(217, 217, 217, 0), rgba(217, 217, 217, 0.04) 100%);
  font-weight: 500;
  font-size: 18px;
  line-height: 146%;
  text-align: center;
  color: #fff;
  outline: none;
}
</style>

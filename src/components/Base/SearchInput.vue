<template>
  <n-input round placeholder="搜索" @keyup.enter="handleSubmit" v-model="searchVal">
    <!-- <template #suffix>
      <n-icon :component="FlashOutline" />
    </template> -->
  </n-input>
</template>

<script setup lang="ts">
const searchVal = defineModel()
const handleSubmit = () => {
  emit('search', searchVal.value)
}
const emit = defineEmits(['search'])
</script>

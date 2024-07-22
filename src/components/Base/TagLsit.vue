<template>
  <div class="w-full box-border px-2">
    <n-tabs v-model:value="value" type="line">
      <n-tab v-for="panel in panelsList" :key="panel" :name="panel" @update:value="handleClick">
        {{ panel }}
      </n-tab>
      <!-- <template #prefix> Prefix </template> -->
      <!-- <template #suffix> Suffix </template> -->
    </n-tabs>
  </div>
</template>

<script lang="ts" setup>
import { words } from '@/enums/data'
import { computed, ref } from 'vue'
const panelsList = computed(() => {
  const tags = words.map((item) => item.tags).flat()
  const uniqueTags = Array.from(new Set(tags))
  return ['all', ...uniqueTags]
})
const value = ref(panelsList.value[0])
const handleClick = (data) => {
  console.log('💗handleClick---------->', data)
}
</script>

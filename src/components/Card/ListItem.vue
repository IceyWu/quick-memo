<template>
  <div
    class="list-item-card cursor-pointer p-4 text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <h3>{{ props.info.title }}</h3>
    <p>{{ props.info.content }}</p>
  </div>
</template>

<script setup lang="ts">
interface IListItem {
  content: string
  title: string
  [key: string]: any
}
const props = defineProps<{
  info: IListItem
}>()
</script>

<style scoped lang="scss"></style>

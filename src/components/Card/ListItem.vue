<template>
  <div
    @click="writeTextFunc"
    class="list-item-card cursor-pointer p-4 text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <h3>{{ props.info.title }}</h3>
    <p>{{ props.info.content }}</p>
  </div>
</template>

<script setup lang="ts">
// import { writeText, readText } from '@tauri-apps/api/clipboard'
import { sendNotice } from '@/services/msg'

interface IListItem {
  content: string
  title: string
  [key: string]: any
}
const props = defineProps<{
  info: IListItem
}>()
const writeTextFunc = async () => {
  // await writeText('Tauri is awesome!')

  // assert(await readText(), 'Tauri is awesome!')
  const { content } = props.info as IListItem
  console.log('🌵-----content-----', content)
  sendNotice('', 'Copy!')
  // assert(content, 'Tauri is awesome!')
}
</script>

<style scoped lang="scss"></style>

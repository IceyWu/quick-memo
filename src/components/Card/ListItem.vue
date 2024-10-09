<template>
  <div
    @click="writeTextFunc"
    :class="chooseIndex === index ? 'list-item-card-selected' : ''"
    class="list-item-card cursor-pointer p-4 rounded-xl">
    <p class="title">{{ props.info.title }}</p>
    <p class="content">{{ props.info.content }}</p>
  </div>
</template>

<script setup lang="ts">
import { writeText } from '@tauri-apps/plugin-clipboard-manager'
// import { writeText } from '@tauri-apps/api/clipboard'
import { sendNotice } from '@/services/msg'
import assert from 'node:assert'
import { to } from '@iceywu/utils'

interface IListItem {
  content: string
  title: string
  [key: string]: any
}
const props = defineProps<{
  info: IListItem
  chooseIndex: number
  index: number
}>()
const emit = defineEmits(['handleClick'])
const writeTextFunc = async () => {
  // assert(await readText(), 'Tauri is awesome!')
  const { content } = props.info as IListItem
  console.log('🌵-----content-----', content)
  console.log('🦄-----assert-----', assert)
  emit('handleClick', props.info, props.index)
  const [err, _] = await to(writeText(content))
  console.log('🐳-----err, _-----', err, _)
  if (err) {
    sendNotice('error', 'Copy failed!')
  } else {
    sendNotice('', 'Copy!')
  }
}
defineExpose({
  writeTextFunc
})
</script>

<style scoped lang="scss">
.list-item-card {
  background-image: linear-gradient(to left, #a8edea 0%, #fed6e3 100%);
  box-sizing: border-box;

  &-selected {
    // background-image: linear-gradient(to left, #a8edea 0%, #fed6e3 100%);
    border: 2px solid #a8edea;
  }
  .content {
    line-height: 23px;
    font-size: 14px;
  }
  .title {
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
  }
}
</style>

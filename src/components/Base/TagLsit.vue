<template>
  <div class="w-full box-border px-2">
    <n-tabs v-model:value="value" type="line" @update:value="handleClick">
      <n-tab v-for="(panel, index) in panelsList" :key="index" :name="panel">
        {{ panel }}
      </n-tab>
      <!-- <template #prefix> Prefix </template> -->
      <template #suffix>
        <!-- 文件选择 -->
        <input type="file" ref="fileInput" id="file" class="hidden" accept=".json" @change="handleFileChange" />
        <n-button type="primary" @click="handleGetFile">导入</n-button>
      </template>
    </n-tabs>
  </div>
</template>

<script lang="ts" setup>
import { baseWords } from '@/stores/baseWords'
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
const baseWordsStore = baseWords()
const { baseWordsVal } = storeToRefs(baseWordsStore) as any

const panelsList = computed<any>(() => {
  const tags = baseWordsVal.value?.map((item: any) => item.tags).flat()
  const uniqueTags = Array.from(new Set(tags))
  return ['all', ...uniqueTags]
})
const value = ref<any>(panelsList.value[0])
const emit = defineEmits(['handleChange'])
const handleClick = (data: any) => {
  emit('handleChange', data)
}
const handleFileChange = (data: any) => {
  const file = data?.target?.files[0]

  const reader = new FileReader() //新建一个FileReader
  reader.readAsText(file, 'UTF-8') //读取文件
  reader.onload = async function (evt: any) {
    //读取文件完毕执行此函数
    const dataJson = JSON.parse(evt?.target?.result)

    baseWordsStore.setBaseWords(dataJson?.words)
  }
}
const fileInput = ref()
const handleGetFile = () => {
  fileInput.value.click()
}
</script>

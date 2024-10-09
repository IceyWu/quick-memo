<template>
  <!-- todo 这里设置了 data-tauri-drag-region但是有部分区域不可以拖动 -->
  <!-- 单独使用n-config-provider来包裹不需要主题切换的界面 -->
  <n-config-provider :theme="lightTheme" data-tauri-drag-region class="login-box size-full rounded-8px select-none">
    <!--顶部操作栏-->
    <ActionBar data-tauri-drag-region :max-w="false" :shrink="false" />
    <div class="box-border flex flex-col px-2 py-3">
      <TagLsit @handleChange="handleTagChange" />
      <!-- <SearchInput @search="handelSearch" v-model="searchVal" /> -->
      <div class="box-border flex flex-col overflow-auto h-73 list-box">
        <div v-for="(item, index) in dataList" :key="index" class="items-center justify-between p-8px">
          <CardListItem
            ref="cardListItemRef"
            @handleClick="handleClick(item, index)"
            :chooseIndex
            :index
            :info="item" />
        </div>
      </div>
    </div>
  </n-config-provider>
</template>
<script setup lang="ts">
import { lightTheme } from 'naive-ui'

import CardListItem from '@/components/Card/ListItem.vue'

import TagLsit from '@/components/Base/TagLsit.vue'

import { onKeyStroke } from '@vueuse/core'
import { baseWords } from '@/stores/baseWords'
const baseWordsStore = baseWords()
// const { baseWordsVal } = storeToRefs(baseWordsStore)
onKeyStroke(['w', 'W', 'ArrowUp'], () => {
  if (chooseIndex.value > 0) {
    chooseIndex.value--
  }
})
onKeyStroke(['s', 'S', 'ArrowDown'], () => {
  if (chooseIndex.value < dataList.value.length - 1) {
    chooseIndex.value++
  }
})
// enter
onKeyStroke('Enter', () => {
  if (chooseIndex.value < dataList.value.length - 1 && chooseIndex.value >= 0) {
    if (cardListItemRef.value) {
      cardListItemRef.value[chooseIndex.value]?.writeTextFunc()
    }
  }
})

const cardListItemRef = ref()
const chooseTag = ref('all')
const dataList = computed(() => {
  return baseWordsStore.getWordsByTag(chooseTag.value)
})
const handleTagChange = (val: string) => {
  chooseTag.value = val
}

const arrowStatus = ref(false)

/**监听是否点击了除了下拉框外的其他地方*/
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Element
  if (!target.matches('.account-box, .account-box *, .down')) {
    arrowStatus.value = false
  }
}

onMounted(async () => {
  window.addEventListener('click', handleClickOutside, true)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside, true)
})
//

const chooseIndex = ref(0)
const handleClick = (date: any, index: any) => {
  console.log('🌵-----date-----', date)

  chooseIndex.value = index
}
</script>

<style scoped lang="scss">
@import '@/styles/scss/global/login-bg';
@import '@/styles/scss/login';

.list-box::-webkit-scrollbar {
  display: none;
}
</style>

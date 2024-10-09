<template>
  <NaiveProvider :message-max="3" :notific-max="3">
    <div id="app">
      <router-view />
    </div>
  </NaiveProvider>
</template>
<script setup lang="ts">
import { setting } from '@/stores/setting.ts'
import { StoresEnum, ThemeEnum } from '@/enums'

const settingStore = setting()
const { themes } = storeToRefs(settingStore)

onMounted(async () => {
  await import(`@/styles/scss/theme/${themes.value.versatile}.scss`)
  // initWebSocket()
  // /**! 使用msi或者其他安装包安装后才会显示应用的名字和图标 */
  // sendNotification({ title: 'TAURI', body: 'Tauri is awesome!' })
  // 判断localStorage中是否有设置主题
  if (!localStorage.getItem(StoresEnum.SETTING)) {
    settingStore.initTheme(ThemeEnum.OS)
  }
})

onUnmounted(() => {
  window.removeEventListener('contextmenu', (e) => e.preventDefault(), false)
})
</script>
<style lang="scss">
#app {
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transition: all 0.9s ease;
  border-radius: 10px;
}
/* 修改naive-ui select 组件的样式 */
.n-base-selection,
.n-base-select-menu,
.n-base-select-menu .n-base-select-option .n-base-select-option__content,
.n-base-select-menu .n-base-select-option::before {
  border-radius: 8px;
  font-size: 12px;
}
</style>

<template>
  <!-- todo 这里设置了 data-tauri-drag-region但是有部分区域不可以拖动 -->
  <!-- 单独使用n-config-provider来包裹不需要主题切换的界面 -->
  <n-config-provider :theme="lightTheme" data-tauri-drag-region class="login-box size-full rounded-8px select-none">
    <!--顶部操作栏-->
    <ActionBar :max-w="false" :shrink="false" />

    <div class="text-14px cursor-pointer hover:bg-#f3f3f3 hover:rounded-6px p-8px">注册账号</div>
  </n-config-provider>
</template>
<script setup lang="ts">
import { useWindow } from '@/hooks/useWindow.ts'
import { delay } from 'lodash-es'
import { lightTheme } from 'naive-ui'
import { setting } from '@/stores/setting.ts'
import { storeToRefs } from 'pinia'
import { invoke } from '@tauri-apps/api/tauri'
import { useLogin } from '@/hooks/useLogin.ts'

const settingStore = setting()
const { login } = storeToRefs(settingStore)
const accountRef = ref()
const passwordRef = ref()
const avatarRef = ref()
const nameRef = ref()
const protocol = ref()
const loginDisabled = ref(false)
const loading = ref(false)
const arrowStatus = ref(false)
const isAutoLogin = ref(false)
const { setLoginState } = useLogin()
/** 登录按钮的文本内容 */
const loginText = ref('登录')
const { createWebviewWindow } = useWindow()

watchEffect(() => {
  loginDisabled.value = !(accountRef.value && passwordRef.value && protocol.value)
  // 清空账号的时候设置默认头像
  if (!accountRef.value) {
    avatarRef.value = '/logo.png'
  }
})

/**登录后创建主页窗口*/
const loginWin = () => {
  loading.value = true
  delay(async () => {
    await createWebviewWindow('', '', 960, 720, 'login', false, true)
    loading.value = false
    if (!login.value.autoLogin || login.value.accountInfo.password === '') {
      settingStore.setAccountInfo({
        account: accountRef.value,
        password: passwordRef.value,
        avatar: avatarRef.value,
        name: nameRef.value,
        uid: '123456'
      })
      await setLoginState()
    }
  }, 1000)
}

/**监听是否点击了除了下拉框外的其他地方*/
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Element
  if (!target.matches('.account-box, .account-box *, .down')) {
    arrowStatus.value = false
  }
}

onMounted(async () => {
  await invoke('set_stateless_icon').catch((error) => {
    console.error('设置无状态图标失败:', error)
  })
  if (login.value.autoLogin && login.value.accountInfo.password !== '') {
    isAutoLogin.value = true
    // TODO 检查用户网络是否连接 (nyh -> 2024-03-16 12:06:59)
    loginText.value = '网络连接中'
    delay(async () => {
      loginWin()
      loginText.value = '登录'
      await setLoginState()
    }, 1000)
  }
  window.addEventListener('click', handleClickOutside, true)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside, true)
})
</script>

<style scoped lang="scss">
@import '@/styles/scss/global/login-bg';
@import '@/styles/scss/login';
</style>

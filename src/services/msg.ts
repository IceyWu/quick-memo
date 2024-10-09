import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/plugin-notification'

async function checkPermission() {
  if (!(await isPermissionGranted())) {
    return (await requestPermission()) === 'granted'
  }
  return true
}
export const sendNotice = async (title: any, body: any) => {
  if (!(await checkPermission())) {
    return
  }
  sendNotification({ title, body })
}

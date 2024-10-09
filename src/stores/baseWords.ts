import { defineStore } from 'pinia'
import { StoresEnum } from '@/enums'

export const baseWords = defineStore(StoresEnum.HISTORY, {
  state: (): any => ({
    baseWordsVal: []
  }),
  actions: {
    setBaseWords(list: any[]) {
      this.baseWordsVal = list
    },
    getWordsByTag(tag: string) {
      return tag === 'all' ? this.baseWordsVal : this.baseWordsVal.filter((item: any) => item.tags.includes(tag))
    }
  },
  share: {
    enable: true
  }
})

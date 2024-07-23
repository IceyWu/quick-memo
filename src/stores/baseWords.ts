import { defineStore } from 'pinia'
import { StoresEnum } from '@/enums'

export const baseWords = defineStore(StoresEnum.HISTORY, {
  state: (): STO.BaseWords => ({
    baseWordsVal: []
  }),
  actions: {
    setBaseWords(list: any[]) {
      this.baseWordsVal = list
    },
    getWordsByTag(tag: string) {
      return tag === 'all' ? this.baseWordsVal : this.baseWordsVal.filter((item) => item.tags.includes(tag))
    }
  },
  share: {
    enable: true
  }
})

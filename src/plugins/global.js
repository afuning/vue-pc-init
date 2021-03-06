import ENUMS from '@/utils/enums'
import validators from '@/utils/validators'

export default {
  install (Vue) {
    const $emun = (k, v) => {
      if (v === undefined) {
        return ENUMS[k]
      } else {
        return ENUMS[k][v]
      }
    }
    console.log(process.env)
    Vue.prototype.$emun = $emun
    Vue.prototype.$valid = validators
    Vue.prototype.$env = process.env
  }
}

import enums from '@/utils/enums'

const _formatEnums = (val, k) => {
  if (!enums[k]) return '未知'
  return enums[k][val]
}

export default _formatEnums

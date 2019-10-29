// 社区状态
const COMMUNITY_STATUS = {
  WAITING: 1,
  BINDING: 2,
  OUTTIME: 3,
  UNBING: 4
}
export default {
  communityStatus: {
    [COMMUNITY_STATUS.WAITING]: '待验证',
    [COMMUNITY_STATUS.BINDING]: '已绑定',
    [COMMUNITY_STATUS.OUTTIME]: '邀请过期',
    [COMMUNITY_STATUS.UNBING]: '物业解绑'
  }
}

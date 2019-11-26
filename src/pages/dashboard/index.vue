<template>
  <div class="table-template">
    <el-table
      :data="tableData"
      :loading="isTableLoading"
    >
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="名称" prop="name"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{row}">
          <el-button type="text" @click="handleTableAction('edit', row)" size="small">编辑</el-button>
          <el-button type="text" @click="handleTableAction('delete', row)" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="pagin.page"
        :page-size="pagin.pageSize"
        layout="prev, pager, next"
        :total="pagin.totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableTemplate',
  data () {
    return {
      tableData: [{
        id: 1,
        name: '测试1'
      }],
      isTableLoading: false,
      pagin: {
        page: 1,
        pageSize: 10,
        totalCount: 1
      }
    }
  },
  methods: {
    handleTableAction (type, data) {
      switch (type) {
        case 'delete':
          this.onDelete(data)
          break
        case 'edit':
          this.onEdit(data)
          break
        default:
          break
      }
    },
    async onDelete (data) {
      try {
        await this.$confirm(`确认删除${data.name}`, '提示')
        this.$message.success('删除成功')
      } catch (e) {
        if (e === 'cancel') return
        this.$message.error(e.message)
      }
    },
    onEdit (data) {
      console.log(data)
    },
    handleCurrentChange (page) {
      this.pagin.page = page
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

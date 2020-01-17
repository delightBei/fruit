<template>
  <div>
    <h1>管理员列表</h1>
     <el-table :data ="items">
        <el-table-column prop="_id" label="id" width="300">
        </el-table-column>
        <el-table-column prop="username" label="用户名称" >
        </el-table-column>
         <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button type="primary" size="small"
        @click="$router.push(`/admin_users/edit/${scope.row._id}`)">编辑</el-button>
         <el-button type="danger" size="small"
        @click="remove(scope.row)">删除</el-button>
      </template>
    </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items: []
    }
  },
  methods:{
    async fetch(){
      const res = await this.$http.get('rest/admin_users')
      this.items = res.data
    },
    async remove(row){
         this.$confirm(`是否确定删除"${row.name}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(async () => {
          const res = await this.$http.delete(`rest/admin_users/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch()
        })
    }
  },
  created(){
    this.fetch();
  }
}
</script>
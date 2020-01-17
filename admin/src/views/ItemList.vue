<template>
  <div>
    <h1>商品列表</h1>
     <el-table :data ="items">
        <el-table-column prop="_id" label="id" width="300">
        </el-table-column>
    
        <el-table-column prop="name" label="分类名称" >
        </el-table-column>
        <el-table-column prop="price" label="价格" >
        </el-table-column>
        <el-table-column prop="icon" label="图标">
          <template slot-scope="scope">
            <img :src="scope.row.icon" style="height: 3rem">
          </template>
        </el-table-column>
         <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button type="primary" size="small"
        @click="$router.push(`/items/edit/${scope.row._id}`)">编辑</el-button>
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
      const res = await this.$http.get('rest/items')
      this.items = res.data
    },
    async remove(row){
         this.$confirm(`是否确定删除"${row.name}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(async () => {
          const res = await this.$http.delete(`rest/items/${row._id}`)
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
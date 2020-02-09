<template>
  <div class="about">
    <h2>{{id ? '编辑' : '新建'}}商品{{id}}</h2>
    <el-form label-width="125px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
       <el-form-item label="价格">
        <el-input v-model="model.price"></el-input>
      </el-form-item>
      <el-form-item label="介绍">
        <el-input v-model="model.present"></el-input>
      </el-form-item>
      <el-form-item label="图片">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar">
         <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
        <el-form-item label="图片二">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :on-success="afterUploadImg"
        >
          <img v-if="model.img" :src="model.img" class="avatar">
         <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
       <el-form-item label="图片三">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :on-success="afterUploadImage"
        >
          <img v-if="model.image" :src="model.image" class="avatar">
         <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data () {
    return {
      model: {},
    }
  },
  methods: {
    afterUpload(res) {
       this.$set(this.model, 'icon' , res.url);
       this.model.icon = res.url;
    },
    afterUploadImg(res) {
      this.$set(this.model, 'img' , res.url);
      this.model.img = res.url;
    },
    afterUploadImage(res) {
      this.$set(this.model, 'image' , res.url);
      this.model.image = res.url;
    },
      async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/items/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/items", this.model);
      }
      this.$router.push("/items/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch(){
    const res = await this.$http.get(`rest/items/${this.id}`);
    this.model = res.data;
    },
  },
  created(){
    this.id && this.fetch();
  }
}
</script>

<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
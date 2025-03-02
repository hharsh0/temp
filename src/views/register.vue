<template>
    <div class="flex justify-center items-center min-h-screen bg-cover bg-center" style="background-image: url('/liulangdongwubeihua/img/back-img-bg.jpg');">
      <div class="w-full max-w-md p-8 space-y-6 bg-white bg-opacity-70 shadow-lg rounded-lg">
        <h1 class="text-2xl font-bold text-center text-black">流浪动物管理系统注册</h1>
        
        <el-form class="space-y-4" label-width="120px">
          <el-form-item label="账号">
            <el-input v-model="ruleForm.username" autocomplete="off" placeholder="账号" />
          </el-form-item>
  
          <el-form-item label="密码">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off" show-password />
          </el-form-item>
  
          <el-form-item label="重复密码">
            <el-input type="password" v-model="ruleForm.repetitionPassword" autocomplete="off" show-password />
          </el-form-item>
  
          <el-form-item label="用户姓名" v-if="tableName=='yonghu'">
            <el-input v-model="ruleForm.yonghuName" autocomplete="off" placeholder="用户姓名" />
          </el-form-item>
  
          <el-form-item label="手机号" v-if="tableName=='yonghu'">
            <el-input v-model="ruleForm.yonghuPhone" autocomplete="off" placeholder="手机号" />
          </el-form-item>
  
          <el-form-item label="电子邮箱" v-if="tableName=='yonghu'">
            <el-input v-model="ruleForm.yonghuEmail" autocomplete="off" placeholder="电子邮箱" />
          </el-form-item>
  
          <el-form-item label="自愿者姓名" v-if="tableName=='ziyuanzhe'">
            <el-input v-model="ruleForm.ziyuanzheName" autocomplete="off" placeholder="自愿者姓名" />
          </el-form-item>
  
          <el-form-item label="手机号" v-if="tableName=='ziyuanzhe'">
            <el-input v-model="ruleForm.ziyuanzhePhone" autocomplete="off" placeholder="手机号" />
          </el-form-item>
  
          <el-form-item label="电子邮箱" v-if="tableName=='ziyuanzhe'">
            <el-input v-model="ruleForm.ziyuanzheEmail" autocomplete="off" placeholder="电子邮箱" />
          </el-form-item>
  
          <div class="flex justify-center space-x-4">
            <el-button type="primary" class="px-6 py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600" @click="login()">注册</el-button>
            <el-button type="primary" class="px-6 py-2 rounded-md bg-gray-500 text-white font-semibold hover:bg-gray-600" @click="close()">取消</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </template>
  
<script>
    export default {
        data() {
            return {
                ruleForm: {
                },
                tableName:"",
                rules: {},
                sexTypesOptions : [],
            };
        },
        mounted(){
            let table = this.$storage.get("loginTable");
            this.tableName = table;

            //级联表的下拉框查询

        },
        methods: {
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            close(){
                this.$router.push({ path: "/login" });
            },
            // 注册
            login() {

                            if((!this.ruleForm.username)){
                                this.$message.error('账号不能为空');
                                return
                            }
                            if((!this.ruleForm.password)){
                                this.$message.error('密码不能为空');
                                return
                            }
                            if((!this.ruleForm.repetitionPassword)){
                                this.$message.error('重复密码不能为空');
                                return
                            }
                            if(this.ruleForm.repetitionPassword != this.ruleForm.password){
                                this.$message.error('密码和重复密码不一致');
                                return
                            }
                            if((!this.ruleForm.yonghuName)&& 'yonghu'==this.tableName){
                                this.$message.error('用户姓名不能为空');
                                return
                            }
                             if('yonghu' == this.tableName && this.ruleForm.yonghuPhone&&(!this.$validate.isMobile(this.ruleForm.yonghuPhone))){
                                 this.$message.error('手机应输入手机格式');
                                 return
                             }
                            if('yonghu' == this.tableName && this.ruleForm.yonghuEmail&&(!this.$validate.isEmail(this.ruleForm.yonghuEmail))){
                                this.$message.error("邮箱应输入邮件格式");
                                return
                            }
                            if((!this.ruleForm.ziyuanzheName)&& 'ziyuanzhe'==this.tableName){
                                this.$message.error('自愿者姓名不能为空');
                                return
                            }
                             if('ziyuanzhe' == this.tableName && this.ruleForm.ziyuanzhePhone&&(!this.$validate.isMobile(this.ruleForm.ziyuanzhePhone))){
                                 this.$message.error('手机应输入手机格式');
                                 return
                             }
                            if('ziyuanzhe' == this.tableName && this.ruleForm.ziyuanzheEmail&&(!this.$validate.isEmail(this.ruleForm.ziyuanzheEmail))){
                                this.$message.error("邮箱应输入邮件格式");
                                return
                            }
                this.$http({
                    url: `${this.$baseURL}/${this.tableName}/register`,
                    method: "post",
                    data:this.ruleForm
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                    this.$message({
                        message: "注册成功,请登录后在个人中心页面补充个人数据",
                        type: "success",
                        duration: 1500,
                        onClose: () => {
                        this.$router.replace({ path: "/login" });
                }
                });
                } else {
                    this.$message.error(data.msg);
                }
            });
            }
        }
    };
</script>
<style lang="scss" scoped>
.el-radio__input.is-checked .el-radio__inner {
    border-color: #00c292;
    background: #00c292;
}

.el-radio__input.is-checked + .el-radio__label {
    color: #00c292;
}

.h1 {
    margin-top: 10px;
}

body {
    padding: 0;
    margin: 0;
}

.nk-navigation {
    margin-top: 15px;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        background: rgba(255, 255, 255, 0.2);
        width: 100px;
        height: 50px;
        border-radius: 30px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .icon {
        margin-left: 10px;
        width: 30px;
        height: 30px;
    }
}

.register-container {
    margin-top: 10px;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        max-width: 500px;
        height: 50px;
        border-radius: 30px;
        margin: 0 auto;
        padding: 0 20px;

        div {
            margin-left: 10px;
        }
    }
}

.container {
    height: 100vh;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

    .login-form {
        position: absolute;
        right: 50%;
        top: 50%;
        transform: translate3d(50%, -50%, 0);
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.5);
        width: 420px;
        padding: 30px 30px 40px;
        font-size: 14px;
        font-weight: 500;

        .h1 {
            margin: 0;
            text-align: center;
            line-height: 54px;
            font-size: 24px;
            color: #000;
        }

        .rgs-form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .input {
                width: 100%;

                & ::v-deep(.el-form-item__label) {
                    line-height: 40px;
                    color: rgba(17, 16, 16, 1);
                    font-size: #606266;
                }

                & ::v-deep(.el-input__inner) {
                    height: 40px;
                    color: rgba(23, 24, 26, 1);
                    font-size: 14px;
                    border-width: 1px;
                    border-style: solid;
                    border-color: #606266;
                    border-radius: 22px;
                    background-color: #fff;
                }
            }
        }

        .btn {
            margin: 0 10px;
            width: 88px;
            height: 44px;
            color: #fff;
            font-size: 14px;
            border-width: 1px;
            border-style: solid;
            border-color: #409EFF;
            border-radius: 22px;
            background-color: #409EFF;
        }

        .close {
            margin: 0 10px;
            width: 88px;
            height: 44px;
            color: #409EFF;
            font-size: 14px;
            border-width: 1px;
            border-style: solid;
            border-color: #409EFF;
            border-radius: 22px;
            background-color: #FFF;
        }
    }
}
</style>

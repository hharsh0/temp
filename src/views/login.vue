<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h3 class="text-2xl font-bold text-center text-orange-500">流浪动物管理系统</h3>
        
        <el-form class="space-y-4" label-position="left" label-width="56px">
          <el-form-item label="用户名">
            <el-input placeholder="请输入用户名" v-model="rulesForm.username" />
          </el-form-item>
  
          <el-form-item label="密码">
            <el-input placeholder="请输入密码" type="password" v-model="rulesForm.password" />
          </el-form-item>
  
          <el-form-item label="角色" prop="loginInRole">
            <el-radio v-for="item in filteredMenus" :key="item.roleName" v-model="rulesForm.role" :label="item.roleName">
              {{ item.roleName }}
            </el-radio>
          </el-form-item>
          
          <el-button type="primary" @click="login" class="w-full py-2 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600">
            登录
          </el-button>
        </el-form>
  
        <div class="flex justify-between text-sm text-green-500">
          <span class="cursor-pointer" @click="register('yonghu')">用户注册</span>
          <span class="cursor-pointer" @click="register('ziyuanzhe')">自愿者注册</span>
        </div>
      </div>
    </div>
  </template>
<script>
import menu from "@/utils/menu";
export default {
    data() {
        return {
            rulesForm: {
                username: "",
                password: "",
                role: "",
                code: '',
            },
            menus: [],
            tableName: "",
            codes: [{
                num: 1,
                color: '#000',
                rotate: '10deg',
                size: '16px'
            }, {
                num: 2,
                color: '#000',
                rotate: '10deg',
                size: '16px'
            }, {
                num: 3,
                color: '#000',
                rotate: '10deg',
                size: '16px'
            }, {
                num: 4,
                color: '#000',
                rotate: '10deg',
                size: '16px'
            }],
        };
    },
    mounted() {
        // let menus = menu.list();
        this.menus = menu.list() || [];
        console.log(menu.list());
    },
    created() {
        this.setInputColor()
        this.getRandCode()
    },
    computed: {
        filteredMenus() {
            return this.menus.filter(item => item.hasBackLogin === '是');
        }
    },
    methods: {
        setInputColor() {
            this.$nextTick(() => {
                document.querySelectorAll('.loginIn .el-input__inner').forEach(el => {
                    el.style.backgroundColor = "rgba(194, 189, 189, 0.39)"
                    el.style.color = "rgba(51, 51, 51, 1)"
                    el.style.height = "50px"
                    el.style.lineHeight = "50px"
                    el.style.borderRadius = "15px"
                })
                document.querySelectorAll('.loginIn .style3 .el-form-item__label').forEach(el => {
                    el.style.height = "50px"
                    el.style.lineHeight = "50px"
                })
                document.querySelectorAll('.loginIn .el-form-item__label').forEach(el => {
                    el.style.color = "rgba(255, 69, 0, 1)"
                })
                setTimeout(() => {
                    document.querySelectorAll('.loginIn .role .el-radio__label').forEach(el => {
                        el.style.color = "rgba(255, 69, 0, 1)"
                    })
                }, 350)
            })

        },
        register(tableName) {
            this.$storage.set("loginTable", tableName);
            this.$router.push({ path: '/register' })
        },
        // 登陆
        login() {
            let code = ''
            for (let i in this.codes) {
                code += this.codes[i].num
            }
            if ('0' == '1' && !this.rulesForm.code) {
                this.$message.error("请输入验证码");
                return;
            }
            if ('0' == '1' && this.rulesForm.code.toLowerCase() != code.toLowerCase()) {
                this.$message.error("验证码输入有误");
                this.getRandCode()
                return;
            }
            if (!this.rulesForm.username) {
                this.$message.error("请输入用户名");
                return;
            }
            if (!this.rulesForm.password) {
                this.$message.error("请输入密码");
                return;
            }
            if (!this.rulesForm.role) {
                this.$message.error("请选择角色");
                return;
            }
            let menus = this.menus;
            for (let i = 0; i < menus.length; i++) {
                if (menus[i]?.roleName == this.rulesForm.role) {
                    this.tableName = menus[i].tableName;
                }
            }
            console.log(this.$baseURL);
            console.log(`${this.$baseURL}/${this.tableName}/login?username=${this.rulesForm.username}&password=${this.rulesForm.password}`);
            this.$http({
                url: `${this.$baseURL}/${this.tableName}/login?username=${this.rulesForm.username}&password=${this.rulesForm.password}`,
                method: "post"
            }).then(({ data }) => {
                if (data && data.code === 0) {
                    this.$storage.set("Token", data.token);
                    this.$storage.set("userId", data.userId);
                    this.$storage.set("role", this.rulesForm.role);
                    this.$storage.set("sessionTable", this.tableName);
                    this.$storage.set("adminName", this.rulesForm.username);
                    this.$router.replace({ path: "/index/" });
                } else {
                    this.$message.error(data.msg);
                }
            });
        },
        getRandCode(len = 4) {
            this.randomString(len)
        },
        randomString(len = 4) {
            let chars = [
                "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
                "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
                "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G",
                "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
                "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2",
                "3", "4", "5", "6", "7", "8", "9"
            ]
            let colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
            let sizes = ['14', '15', '16', '17', '18']

            let output = [];
            for (let i = 0; i < len; i++) {
                // 随机验证码
                let key = Math.floor(Math.random() * chars.length)
                this.codes[i].num = chars[key]
                // 随机验证码颜色
                let code = '#'
                for (let j = 0; j < 6; j++) {
                    let key = Math.floor(Math.random() * colors.length)
                    code += colors[key]
                }
                this.codes[i].color = code
                // 随机验证码方向
                let rotate = Math.floor(Math.random() * 60)
                let plus = Math.floor(Math.random() * 2)
                if (plus == 1) rotate = '-' + rotate
                this.codes[i].rotate = 'rotate(' + rotate + 'deg)'
                // 随机验证码字体大小
                let size = Math.floor(Math.random() * sizes.length)
                this.codes[i].size = sizes[size] + 'px'
            }
        },
    }
};
</script>
<style lang="scss" scoped>
.loginIn {
    min-height: 100vh;
    position: relative;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    .left {
        position: absolute;
        left: 0;
        top: 0;
        width: 360px;
        height: 100%;

        .login-form {
            background-color: transparent;
            width: 100%;
            right: inherit;
            padding: 0 12px;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }

        .title-container {
            text-align: center;
            font-size: 24px;

            .title {
                margin: 20px 0;
            }
        }

        .el-form-item {
            position: relative;

            .svg-container {
                padding: 6px 5px 6px 15px;
                color: #889aa4;
                vertical-align: middle;
                display: inline-block;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 1;
                padding: 0;
                line-height: 40px;
                width: 30px;
                text-align: center;
            }

            .el-input {
                display: inline-block;
                height: 40px;
                width: 100%;

                & ::v-deep(input) {
                    background: transparent;
                    border: 0px;
                    -webkit-appearance: none;
                    padding: 0 15px 0 30px;
                    color: #fff;
                    height: 40px;
                }
            }
        }
    }

    .center {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 360px;
        transform: translate3d(-50%, -50%, 0);
        height: 446px;
        border-radius: 8px;
    }

    .right {
        position: absolute;
        left: inherit;
        right: 0;
        top: 0;
        width: 360px;
        height: 100%;
    }

    .code {
        .el-form-item__content {
            position: relative;

            .getCodeBt {
                position: absolute;
                right: 0;
                top: 0;
                line-height: 40px;
                width: 100px;
                background-color: rgba(51, 51, 51, 0.4);
                color: #fff;
                text-align: center;
                border-radius: 0 4px 4px 0;
                height: 40px;
                overflow: hidden;

                span {
                    padding: 0 5px;
                    display: inline-block;
                    font-size: 16px;
                    font-weight: 600;
                }
            }

            .el-input {
                & ::v-deep(input) {
                    padding: 0 130px 0 30px;
                }
            }
        }
    }

    .setting {
        & ::v-deep(.el-form-item__content) {
            padding: 0 15px;
            box-sizing: border-box;
            line-height: 32px;
            height: 32px;
            font-size: 14px;
            color: #999;
            margin: 0 !important;

            .register {
                float: left;
                width: 50%;
            }

            .reset {
                float: right;
                width: 50%;
                text-align: right;
            }
        }
    }

    .style2 {
        padding-left: 30px;

        .svg-container {
            left: -30px !important;
        }

        .el-input {
            & ::v-deep(input) {
                padding: 0 15px !important;
            }
        }
    }

    .code.style2,
    .code.style3 {
        .el-input {
            & ::v-deep(input) {
                padding: 0 115px 0 15px;
            }
        }
    }

    .style3 {
        & ::v-deep(.el-form-item__label) {
            padding-right: 6px;
        }

        .el-input {
            & ::v-deep(input) {
                padding: 0 15px !important;
            }
        }
    }

    .role {
        & ::v-deep(.el-form-item__label) {
            width: 56px !important;
        }

        & ::v-deep(.el-radio) {
            margin-right: 12px;
        }
    }
}
</style>

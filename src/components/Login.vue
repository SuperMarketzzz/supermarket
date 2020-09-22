<template>
  <div id="logo">
    <div class="login-box" style="margin-top:200px">
      <!-- 通过:rules="loginFormRules"来绑定输入内容的校验规则 -->
      <el-form :rules="loginFormRules" ref="LoginForm" :model="loginForm" label-position="right" label-width="auto" show-message>
        <span class="login-title" style="margin-left:-110px;font-size:30px">欢迎登录</span>

        <div style="margin-top: 5px"></div>

        <el-form-item label="用户名" prop="name" style="margin-left:500px;margin-top:30px;font-weight:bold">
          <el-col :span="8" >
            <el-input type="text" v-model="loginForm.name"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="密码" prop="pwd" style="margin-left:500px;font-weight:bold">
          <el-col :span="8" >
            <el-input type="password" v-model="loginForm.pwd"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('LoginForm')" style="margin-left:-180px">登录</el-button>
          <el-button type="info" @click="goMain">先去首页</el-button>
        </el-form-item>
      </el-form>
      <p>还没有账号？ 现在<router-link to='/register'>注册</router-link></p>
    </div>
  </div>
</template>

<script>
    import jwt from 'jwt-decode';
    export default {
        name: "Login",
        data () {
            return {
                loginForm: {
                    name: '',
                    pwd: ''
                },
                // 表单验证，需要在 el-form-item 元素中增加 prop 属性
                loginFormRules: {
                    name: [
                        {required: true, message: '账号不可为空', trigger: 'blur'},
                       /* {min: 2,max: 7,message: '长度在 2 到 7 个字符'},
                        {pattern: /^[\u4E00-\u9FA5]+$/, message: '用户名只能为中文'}*/
                    ],
                    pwd: [
                        {required: true, message: '密码不可为空', trigger: 'blur'}
                    ]
                }
            }
        },

        methods: {
            login (LoginForm) {
                this.$refs[LoginForm].validate( valid =>{
                    if(valid){
                        this.$axios.post('/login/loginByName',this.loginForm).then( res =>{

                            //登陆成功  使用token
                            const token = res.data;
                            console.log(token);
                            /*存储到ls*/
                            localStorage.setItem('eleToken',token);
                            /*解析token中的信息*/
                            const decoded = jwt(token);
                            console.log("====>", decoded);
                            /*存储至vuex*/
                            this.$store.dispatch("setAuthenticated",!this.isEmpty(decoded))  //decoded空，函数返回真，取反假
                            this.$store.dispatch("setUser",decoded)

                            /*跳转*/
                            this.$router.push({name: 'Welcome'});
                        })
                    }
                })
            },
            isEmpty(value){
                return(
                    value ===undefined || value ===null ||
                    (typeof  value === "object" && Object.keys(value).length ===0) ||
                    (typeof value ==="string" && value.trim().length ===0)
                );
            },

            goMain() {
              this.$router.replace('/main');
            }
        }
    };
</script>
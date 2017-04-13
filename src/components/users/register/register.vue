<template>
  <div class="register">
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
      <Form-item label="用户名" prop="user">
        <Input type="text" v-model="formCustom.user"></Input>
      </Form-item>
      <Form-item label="密码" prop="passwd">
        <Input type="password" v-model="formCustom.passwd"></Input>
      </Form-item>
      <Form-item label="确认密码" prop="passwdCheck">
        <Input type="password" v-model="formCustom.passwdCheck"></Input>
      </Form-item>
      <Form-item label="手机号" prop="passwdCheck" class="phone">
        <Input type="password" v-model="formCustom.passwdCheck"></Input>
      </Form-item>
      <Form-item label="验证码" prop="passwdCheck">
        <Input type="password" v-model="formCustom.passwdCheck"></Input>
      </Form-item>
      <Button type="primary" class="send">发送验证码</Button>
      <Checkbox v-model="single" class="read">我已阅读并接受voter服务条款</Checkbox>
      <Form-item>
        <Button type="primary" @click="handleSubmit('formCustom')">创建用户</Button>
      </Form-item>
      <a class="havenumber">已有帐号，立即登录</a>
    </Form>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      const validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'))
        } else {
          callback()
        }
      }
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.formCustom.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formCustom.validateField('passwdCheck')
          }
          callback()
        }
      }
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.formCustom.passwd) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        formCustom: {
          user: '',
          passwd: '',
          passwdCheck: ''
        },
        ruleCustom: {
          user: [
            {validator: validateUser, trigger: 'blur'}
          ],
          passwd: [
            {validator: validatePass, trigger: 'blur'}
          ],
          passwdCheck: [
            {validator: validatePassCheck, trigger: 'blur'}
          ]
        },
        single: false
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!')
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .register {
    max-width 50%
    margin 0 auto
    padding-top 100px
    width:700px;
    height:500px;
    background:#f5f7f9;
    border:2px solid #d7dde4;
    margin-bottom:30px;
    padding-right:50px;
  }
  .phone{width:500px;}
  .send{position:relative;bottom:114px;left:250px;margin-left:200px;}
  .havenumber{color:red;position:relative;left:40px;bottom:10px;}
  .read{color:red;position:relative;right:110px;}
</style>

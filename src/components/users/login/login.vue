<template>
  <div class="login">
    <img class="img" src="./vote.png"/><span class="font">Voter</span>
    <div class="title">
      <span class="caption"><span class="line line-l"></span>第三方帐号登陆<span class="line line-r"></span></span>
    </div>
    <div class="icons">
    <img class="icon" src="./qq.png"/>
    <img class="icon" src="./weibo.png"/>
    <img class="icon" src="./wechat.png"/>
    </div>
    <div class="title">
      <span class="caption"><span class="line line-l"></span>使用手机号登陆<span class="line line-r"></span></span>
    </div>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" class="form">
      <Form-item prop="user" class="text">
        <Input type="text" v-model="formInline.user" placeholder="手机号">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item prop="password" class="text">
        <Input type="password" v-model="formInline.password" placeholder="密码">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item>
        <Button type="primary" @click="handleSubmit('formInline'),handleSelect('hello')">登录</Button>
      </Form-item>
    </Form>
    <a class="password">忘记密码?</a>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formInline: {
          user: '',
          password: '',
          modal2: false
        },
        ruleInline: {
          user: [
            {required: true, message: '请填写手机号', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('登陆成功!')
          } else {
            this.$Message.error('登陆失败!')
          }
        })
      },
      handleSelect (path) {
        this.$nextTick(() => {
          this.$router.push(path)
        })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .login {
    max-width 50%
    margin 0 auto
    width: 700px;
    height: 450px;
    background: #f5f7f9;
    border: 2px solid #d7dde4;
    padding-top:30px;
  }
  .font{color:red;font-size:50px;position:relative;bottom:10px;}
  .img{width:50px;height:50px;}

   //水平线部分css
  .title { position: relative; z-index: 2; font-size: 16px; line-height: 24px; text-align: center;
    color: #999; overflow: hidden; }
  .title .caption { position: relative; display: inline-block; }
  .title .caption .line { position: absolute; top: 11px; width: 600px; height: 1px; background-color: #ddd; }
  .title .caption .line-l { right: 100%; margin-right: 15px; }
  .title .caption .line-r { left: 100%; margin-left: 15px; }

  .icon{width:80px;height:80px;margin-left:60px;}
  .icons{position:relative;right:36px;}
  .form{margin-top:30px;}
  .password{position:relative;bottom:74px;left:100px;}
  .text{width:400px;position:relative;left:120px;}
</style>

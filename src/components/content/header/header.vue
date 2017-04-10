<template>
  <div class="body">
    <Back-top :height="100" :bottom="200">
      <div class="top">返回顶端</div>
    </Back-top>
  <div class="bar">
    <img src="../../../assets/vote.png" class="logo" alt="logo"/>
    <div class="logo-text">VOTER</div>
  </div>
  <div class="header">
    <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="handleSelect" v-if="login">
      <Menu-item name="hello">
        <Icon type="ios-paper"></Icon>
        <Button type="ghost" shape="circle">首页</Button>
      </Menu-item>
      <Menu-item name="poll">
        <Icon type="ios-people"></Icon>
        <Button type="ghost" shape="circle">我的投票</Button>
      </Menu-item>
      <Menu-item name="pollmanage">
        <Icon type="ios-people"></Icon>
        <Button type="ghost" shape="circle">投票管理</Button>
      </Menu-item>
      <Menu-item>
        <Icon type="person" @click="modal1 = true"></Icon>
        <Button @click="modal1 = true" type="ghost" shape="circle">个人中心</Button>
      </Menu-item>
    </Menu>
    <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="handleSelect" v-else>
      <Menu-item name="login">
        <Icon type="ios-paper"></Icon>
        <Button type="ghost">登录</Button>
      </Menu-item>
      <Menu-item name="register">
        <Icon type="ios-people"></Icon>
        <Button type="ghost">注册</Button>
      </Menu-item>
    </Menu>
  </div>
    <Modal
      v-model="modal1"
      title="个人中心">
      <div class="number"><span>账号:</span><Input v-model="value1" style="width: 350px" disabled></Input></div>
      <div id="phonenumber"><span>手机号:</span><Input v-model="value2" style="width: 350px" disabled></Input></div>
      <div class="number"><span>密码:</span><Input v-model="value3" style="width: 350px" :disabled="seen"></Input></div>
      <Button type="ghost" @click="seen=false" class="button">修改密码</Button>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'header',
    props: {
      login: {
        type: Boolean
      }
    },
    data () {
      return {
        msg: 'this is the header',
        theme1: 'light',
        theme2: 'dark',
        theme3: 'primary',
        modal1: false,
        value1: '325787573',
        value2: '15832342503',
        value3: '123456',
        seen: true
      }
    },
    mounted() {
      this.fetchdate()
    },
    methods: {
      handleSelect (path) {
        this.$nextTick(() => {
          this.$router.push(path)
        })
      },
      fetchdate() {
          fetch('http://oj.marklux.cn/news/1',{
              method: 'GET'
          }).then((res)=>{
              return res.json()
          }).then((json)=>{
              console.log(json)
              this.value1=json.data.author_id
          })
        fetch('http://oj.marklux.cn/news/1',{
          method: 'GET'
        }).then((res)=>{
          return res.json()
        }).then((json)=>{
          console.log(json)
          this.value2=json.data.id
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .header {
    float:right;
  }
  .bar{float:left;}
  .bar img{height:100px;}
  .body{margin-top:-50px;}
  .logo-text{ margin-left: 5px;
    display: inline-block;
    font-size: 48px;
    color: #FF0000;
    font-family: Helvetica;
    position:relative;
    top:-30px;
  }
  #phonenumber{text-indent:-6px;margin-top:10px;margin-bottom:10px;}
  .top{
    padding: 10px;
    background: rgba(0, 153, 229, .7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
  }
  .button{margin-top:10px;}
</style>

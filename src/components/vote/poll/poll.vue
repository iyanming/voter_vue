<template>
    <div class="poll">
      <Form :model="formItem" :label-width="80" id="top">
        <Form-item label="投票名称" class="input">
          <Input v-model="formItem.input" placeholder="请输入" ></Input>
        </Form-item>
      </Form>
      <Form ref="formDynamic" :model="formDynamic" :label-width="80" class="input" id="input1">
        <Form-item
          v-for="(item, index) in formDynamic.items"
          :key="item"
          :label="'选项' + (index + 1)"
          :prop="'items.' + index + '.value'"
          :rules="{required: true, message: '选项' + (index + 1) +'不能为空', trigger: 'blur'}">
          <Row>
            <Col span="18">
            <Input type="text" v-model="item.value" placeholder="请输入..."></Input>
            </Col>
            <Col span="4" offset="1">
            <Button type="ghost" @click="handleRemove(index)">删除</Button>
            </Col>
          </Row>
        </Form-item>
        <Form-item>
          <Row>
            <Col span="12">
            <Button type="dashed" long @click="handleAdd" icon="plus-round">新增</Button>
            </Col>
          </Row>
        </Form-item>
        <Radio-group v-model="mode" class="mode">
          <Radio label="单选"></Radio>
          <Radio label="多选"></Radio>
        </Radio-group>
        <Row class="date">
          <Col span="12">
          <Date-picker type="date" placeholder="选择截止日期" style="width: 300px"></Date-picker>
          </Col>
        </Row>
        <div class="block1">
        <span>人数限制</span>
          <Input placeholder="请输入..." :disabled="!disabled1"
                 class="input2" style="width: 300px"></Input>
          <i-switch v-model="disabled1" class="switch"></i-switch>
        </div>
        <div class="block1">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;密码</span>
          <Input type="password" placeholder="请输入..." :disabled="!disabled2"
                 class="input2" style="width: 300px"></Input>
          <i-switch v-model="disabled2" class="switch"></i-switch>
        </div>
        <div class="block">
          <span>是否匿名</span>
          <Select v-model="model6" style="width:200px">
            <Option value="beijing">是</Option>
            <Option value="shenzhen">否</Option>
          </Select>
        </div>
        <Form-item class="button">
          <Button type="primary" @click="handleSubmit('formDynamic')" long>确认发起投票</Button>
          <br>
        </Form-item>
      </Form>
      <Button class="button1" type="primary" @click="modal1 = true" long>二维码分享</Button>
      <Modal v-model="modal1" title="二维码页面">
        <img src="./qrcode.png"/>
        <em>http://localhost:8080/static/img/qrcode.72a6ce4.png</em>
        <Button class="button2" type="primary" @click="modal1 = false">继续投票</Button>
      </Modal>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'poll',
    data () {
      return {
        formDynamic: {
          items: [
            {
              value: ''
            }
          ]
        },
        formLeft: {
          input1: '',
          input2: '',
          input3: ''
        },
        formItem: {
          input: ''
        },
        mode: '单选',
        disabled1: true,
        disabled2: true,
        modal1: false
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
      },
      handleAdd () {
        this.formDynamic.items.push({
          value: ''
        })
      },
      handleRemove (index) {
        this.formDynamic.items.splice(index, 1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  #top{margin-top:50px;}
  .poll{width:700px;height:600px;border:2px solid #d7dde4;margin:0 auto;background:#f5f7f9;
  margin-bottom:50px;}
  .input{width:500px;margin:0 auto;}
  .mode{position:relative;bottom:50px;left:140px;}
  #input1{margin-top:30px;}
  .input2{width:260px;argin-right:80px;}
  .date{margin-left:80px;}
  .block{margin-top:20px;margin-right:200px;}
  .block1{margin-top:20px;margin-right:40px;}
  .button{margin-top:20px;}
  .button1{width:420px;margin:0 auto;margin-left:80px;}
  .button2{width:420px;margin:0 auto;margin-left:30px;margin-top:20px;}
</style>

<template>
  <div class="pollmanage">
    <Row class="row">
      <Col span="8" class="col">
      <Card :bordered="true">
        <div>
          <img src="./icon.png" class="icon">
          <img src="./ongoing.png" class="ongoing">
          <div class="button">
            <Button type="error" @click="modal1 = true">查看</Button>
            <Button type="error">编辑</Button>
            <Button type="error" @click="modal3 = true">删除</Button>
          </div>
        </div>
      </Card>
      </Col>
      <Col span="8" class="col">
      <Card :bordered="true">
        <div>
          <img src="./icon.png" class="icon">
          <img src="./ongoing.png" class="ongoing">
          <div class="button">
            <Button type="error" @click="modal1 = true">查看</Button>
            <Button type="error">编辑</Button>
            <Button type="error" @click="modal3 = true">删除</Button>
          </div>
        </div>
      </Card>
      </Col>
      <Col span="8" class="col">
      <Card :bordered="true">
        <div>
          <img src="./icon.png" class="icon">
          <img src="./ongoing.png" class="ongoing">
          <div class="button">
            <Button type="error" @click="modal1 = true">查看</Button>
            <Button type="error">编辑</Button>
            <Button type="error" @click="modal3 = true">删除</Button>
          </div>
        </div>
      </Card>
      </Col>
      <Col span="8" class="col">
      <Card :bordered="true">
        <div>
          <img src="./icon2.png" class="icon">
          <img src="./finished.png" class="ongoing">
          <div class="button">
            <Button @click="modal1 = true">查看</Button>
            <Button>编辑</Button>
            <Button @click="modal3 = true">删除</Button>
          </div>
        </div>
      </Card>
      </Col>
      <Col span="8" class="col">
      <Card :bordered="true">
        <div>
          <img src="./icon2.png" class="icon">
          <img src="./finished.png" class="ongoing">
          <div class="button">
            <Button @click="modal1 = true">查看</Button>
            <Button>编辑</Button>
            <Button @click="modal3 = true">删除</Button>
          </div>
        </div>
      </Card>
      </Col>
      <Col span="8" class="col">
      <Card :bordered="true">
        <div>
          <img src="./icon2.png" class="icon">
          <img src="./finished.png" class="ongoing">
          <div class="button">
            <Button @click="modal1 = true">查看</Button>
            <Button>编辑</Button>
            <Button @click="modal3 = true">删除</Button>
          </div>
        </div>
      </Card>
      </Col>
      <a @click="all=true" v-if="!all" class="all">显示全部</a>
      <a @click="all=false" v-if="all" class="stop">收起全部</a>
      <Col span="8" class="col" v-if="all">
      <Card :bordered="true">
        <div>
          <img src="./icon2.png" class="icon">
          <img src="./finished.png" class="ongoing">
          <div class="button">
            <Button @click="modal1 = true">查看</Button>
            <Button>编辑</Button>
            <Button @click="modal3 = true">删除</Button>
          </div>
        </div>
      </Card>
      </Col>
      <Col span="8" class="col" v-if="all">
      <Card :bordered="true">
        <div>
          <img src="./icon2.png" class="icon">
          <img src="./finished.png" class="ongoing">
          <div class="button">
            <Button @click="modal1 = true">查看</Button>
            <Button>编辑</Button>
            <Button @click="modal3 = true">删除</Button>
          </div>
        </div>
      </Card>
      </Col>
      <Col span="8" class="col" v-if="all">
      <Card :bordered="true">
        <div>
          <img src="./icon2.png" class="icon">
          <img src="./finished.png" class="ongoing">
          <div class="button">
            <Button @click="modal1 = true">查看</Button>
            <Button>编辑</Button>
            <Button @click="modal3 = true">删除</Button>
          </div>
        </div>
      </Card>
      </Col>
      <Col span="8" class="col" v-if="all">
      <Card :bordered="true">
        <div>
          <img src="./icon2.png" class="icon">
          <img src="./finished.png" class="ongoing">
          <div class="button">
            <Button @click="modal1 = true">查看</Button>
            <Button>编辑</Button>
            <Button @click="modal3 = true">删除</Button>
          </div>
        </div>
      </Card>
      </Col>
      <Col span="8" class="col" v-if="all">
      <Card :bordered="true">
        <div>
          <img src="./icon2.png" class="icon">
          <img src="./finished.png" class="ongoing">
          <div class="button">
            <Button @click="modal1 = true">查看</Button>
            <Button>编辑</Button>
            <Button @click="modal3 = true">删除</Button>
          </div>
        </div>
      </Card>
      </Col>
      <Col span="8" class="col" v-if="all">
      <Card :bordered="true">
        <div>
          <img src="./icon2.png" class="icon">
          <img src="./finished.png" class="ongoing">
          <div class="button">
            <Button @click="modal1 = true">查看</Button>
            <Button>编辑</Button>
            <Button @click="modal3 = true">删除</Button>
          </div>
        </div>
      </Card>
      </Col>
    </Row>
    <Modal
      v-model="modal1" title="投票题目">
      <p>参与人数：xx&nbsp;&nbsp;&nbsp;&nbsp;单选</p>
      <strong>选项一</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>票数：xxx</em>
      <Progress :percent="20"></Progress>
      <strong>选项二</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>票数：xxx</em>
      <Progress :percent="75"></Progress>
      <strong>选项三</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>票数：xxx</em>
      <Progress :percent="5"></Progress>
    </Modal>
    <Modal
      v-model="modal3" title="确认删除">
      <img src="./warn.png" class="img"/>
      <strong class="font">删除投票后,本投票活动及相关数据将全部消失,是否确认删除？</strong>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'pollmanage',
    data () {
      return {
        modal1: false,
        modal3: false,
        all:false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  img{width:100px;}
  .ongoing{position:relative;left:68px;bottom:30px;}
  .icon{position:relative;left:52px;}
  .row{padding:50px;background-color:#f5f7f9;margin-bottom:30px;}
  .col{padding-right:50px;padding-top:30px;}
  .button{margin-top:16px;}
  .img{width:100px;height:100px;}
  .font{color:red;position:relative;bottom:46px;}
  .all{position:relative;left:600px;top:30px;}
  .stop{position:relative;left:200px;top:30px;}
</style>

<template>
  <div class="block2Container">
    <div class="blockContent">
      <div class="blockTitle">为什么选择AI Editor</div>
      <div class="dataList">
        <div class="dataItem" v-for="(item, index) in dataList" :key="index">
          <div class="iconBox">
            <span class="icon iconfont" :class="[item.icon]"></span>
          </div>
          <div class="dataValue">{{ item.value }}</div>
        </div>
      </div>
      <div class="desc">IT先疯</div>
      <div class="functionList">
        <div class="functionItem" v-for="(item, index) in functionList" :key="index">
          <div class="icon iconfont" :class="[item.icon]"></div>
          <div class="info">
            <div class="name">{{ item.name }}</div>
            <div class="value">{{ item.value }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const dataList = ref([
  {
    icon: 'iconstar',
    value: 'Github star数量0+'
  },
  {
    icon: 'iconfork',
    value: 'Github fork数量0+'
  },
  {
    icon: 'iconteamwork',
    value: '代码贡献者0+'
  }
])
const functionList = ref([
  {
    icon: 'iconjingzi',
    name: 'OCR（光学字符识别）',
    value: '能够识别图片中的文字并转换为可编辑的文本格式。'
  },
  {
    icon: 'iconjiegou',
    name: '智能聊天',
    value: '集成了自然语言处理功能，可以进行智能对话和回答问题。'
  },
  {
    icon: 'iconjianpan',
    name: '多模态RAG',
    value: '图片、音频、视频等多种格式的编辑和处理。'
  },
  {
    icon: 'iconzitixiahuaxian',
    name: '语音识别',
    value: '可以将语音输入转换为文本格式。'
  },
  {
    icon: 'iconimage',
    name: '多文档格式编辑',
    value: '支持多种文档格式的编辑和转换。'
  },
  {
    icon: 'icongaikuozonglan',
    name: '智能排版',
    value: '自动调整文字和页面布局，提高文档的整体美观度'
  },
  {
    icon: 'iconxiaolian',
    name: '智能生成',
    value: '利用AI技术自动生成编辑内容，提高编辑效率。'
  },
  {
    icon: 'iconchaolianjie',
    name: '实时协同编辑',
    value: '支持多人同时在线编辑一个文档，能够实时同步各位编辑者的操作，提高团队协作效率。'
  },
  {
    icon: 'iconflow-Mark',
    name: '智能推荐',
    value: '根据用户的编辑历史和偏好，为用户推荐适合的文章、图片、视频等内容，提供编辑灵感。'
  },
  {
    icon: 'iconbiaoqian',
    name: '语法检查',
    value: '集成了语法检查功能，能够自动识别和纠正文本中的语法错误，提高文档的专业度和准确性。'
  },
  {
    icon: 'iconlianjiexian',
    name: '文件版本管理',
    value: '自动保存文件历史版本，支持用户查看、恢复、比对不同版本的文档，确保编辑过程的安全和有序性。'
  },
  {
    icon: 'iconmouseL',
    name: '智能搜索',
    value: '集成了智能搜索引擎，可以通过关键词快速定位文档中的内容，提高编辑效率和检索速度。'
  },
  {
    icon: 'icondaohang',
    name: '智能提醒',
    value: '根据用户设定的提醒时间和内容，智能编辑器能够及时提醒用户完成任务或者重要事件。'
  },
  {
    icon: 'iconshezhi',
    name: '自动备份',
    value: '定期自动备份用户编辑的文档，确保文档数据的安全性和可靠性，避免意外数据丢失。'
  }
])
</script>

<style lang="less" scoped>
.block2Container {
  display: flex;
  justify-content: center;
  align-items: center;

  .blockContent {
    padding: 100px 0;
    width: 100%;
    max-width: 1140px;

    .dataList {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 40px;
      .dataItem {
        box-shadow: 0 5px 30px -10px rgba(0, 0, 0, 0.1);
        border-radius: 20px;
        margin-right: 30px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        &:last-of-type {
          margin-right: 0;
        }

        .iconBox {
          width: 55px;
          height: 55px;
          border-radius: 10px;
          background-color: rgba(30, 165, 154, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;

          .icon {
            font-size: 30px;
            color: #1ea59a;
          }
        }

        .dataValue {
          color: #1e3547;
          font-weight: 700;
        }
      }
    }

    .blockTitle {
      font-size: 30px;
      font-weight: 700;
      color: #1e3547;
      text-align: center;
      margin-bottom: 40px;
    }

    .desc {
      color: #828f99;
      font-size: 17px;
      line-height: 1.7;
    }

    .functionList {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 60px;
      .functionItem {
        display: flex;
        width: 30%;
        margin-bottom: 50px;

        .icon {
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 50px;
          margin-right: 24px;
          color: #1ea59a;
        }

        .info {
          .name {
            margin-bottom: 5px;
            color: #1e3547;
            font-weight: 600;
            font-size: 18px;
          }

          .value {
            font-size: 14px;
            color: #828f99;
          }
        }
      }
    }
  }
}
</style>

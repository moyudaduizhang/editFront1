<template>
  <div class="block5Container">
    <div class="blockContent">
      <div class="infoBox">
        <div class="infoTitle">it先疯队</div>
        <div class="infoDesc">专注AI应用与开源。</div>
        <div class="linkBtnList">
          <div class="linkBtn">
            <a href="https://github.com/wanglin2" target="_blank">
              <span class="linkBtnIcon iconfont icongithub"></span>
            </a>
          </div>
          <div class="linkBtn">
            <a href="https://juejin.cn/user/325111170756279" target="_blank">
              <span class="linkBtnIcon text">掘金</span>
            </a>
          </div>
          <div class="linkBtn">
            <a href="https://segmentfault.com/u/jiejiaoxiaolin/articles" target="_blank">
              <span class="linkBtnIcon text">思否</span>
            </a>
          </div>
          <div class="linkBtn">
            <a href="http://lxqnsys.com/" target="_blank">
              <span class="linkBtnIcon iconfont iconwangzhan"></span>
            </a>
          </div>
          <div class="linkBtn">
            <a href="https://www.zhihu.com/people/wang-lin-49-43-65" target="_blank">
              <span class="linkBtnIcon iconfont iconshejiaotubiao-10"></span>
            </a>
          </div>
          <div class="linkBtn">
            <a href="https://blog.csdn.net/sinat_33488770?type=blog" target="_blank">
              <span class="linkBtnIcon iconfont iconcsdn"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="linkBox">
        <div class="linkTitle">更多作品</div>
        <div class="linkList">
          <div class="linkItem" v-for="item in linkList" :key="item.name">
            <el-tooltip :content="item.desc" placement="top">
              <a :href="item.url" target="_blank">{{ item.name }}</a>
            </el-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const linkList = [
  
]
</script>

<style lang="less" scoped>
.block5Container {
  background-color: #f0f9fa;
  border-radius: 450px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .blockContent {
    width: 100%;
    max-width: 1140px;
    height: 350px;
    display: flex;
    padding-top: 100px;

    .infoBox {
      .infoTitle {
        font-size: 20px;
        font-weight: 700;
        color: #1e3547;
        line-height: 1.4;
        margin-bottom: 20px;
      }

      .infoDesc {
        color: #828f99;
        font-size: 16px;
      }

      .linkBtnList {
        margin-top: 30px;
        display: flex;
        align-items: center;
        .linkBtn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          overflow: hidden;
          background-color: #f0f9fa;
          border: 2px solid #dbf1f1;
          margin-right: 10px;

          a {
            width: 100%;
            height: 100%;
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.5s;

            &:hover {
              background-color: #1ea59a;

              .linkBtnIcon {
                color: #fff;
              }
            }

            .linkBtnIcon {
              font-size: 20px;
              color: #1e3547;
              transition: all 0.5s;

              &.text {
                font-size: 13px;
              }
            }
          }
        }
      }
    }

    .linkBox {
      margin-left: 150px;
      .linkTitle {
        font-size: 20px;
        font-weight: 700;
        color: #1e3547;
        line-height: 1.4;
        margin-bottom: 20px;
      }

      .linkList {
        display: flex;
        flex-wrap: wrap;

        .linkItem {
          margin-right: 20px;
          margin-bottom: 10px;

          a {
            color: #828f99;
            font-size: 15px;
            transition: all 0.5s;
            text-decoration: none;

            &:hover {
              color: #1ea59a;
            }
          }
        }
      }
    }
  }
}
</style>

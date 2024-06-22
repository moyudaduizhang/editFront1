<template>
  <el-header class="header">
    <div class="header-left">
      <el-icon @click="isCollapse=!isCollapse" class="collapse-icon">
        <Expand v-show="isCollapse" />
        <Fold v-show="!isCollapse" />
      </el-icon>
      <el-breadcrumb separator="/" class="breadcrumb">
        <h2>{{ greeting }}</h2>
      </el-breadcrumb>
    </div>
    <el-dropdown class="header-right">
      <span class="el-dropdown-link">
        <el-avatar
            class="mr-3"
            :size="32"
            :src="`${avatarstore.avatarUrl}`"
          />
        <el-icon class="arrow-down-icon">
          <arrow-down/>
        </el-icon>
      </span>
      
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="$router.push({name:'person'})">
            <el-icon><User /></el-icon>个人主页
          </el-dropdown-item>
          <el-dropdown-item @click="logoutbutton">
            <el-icon><CloseBold /></el-icon>退出登录
          </el-dropdown-item>
          <el-dropdown-item @click="$router.push({name:'setting'})">
            <el-icon><Setting /></el-icon>设置
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { Expand, Fold } from "@element-plus/icons-vue";
import { isCollapse } from "@/components/layout/isCollapse";
import { ElMessageBox,ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { useTokenStore,useUserAvatarStore } from "@/store/userstoken";
import { logout } from "@/api/users";
const avatarstore=useUserAvatarStore()
console.log("调用了：",avatarstore.avatarUrl)
const currentTime = ref(new Date());
const greeting = computed(() => {
  const hour = currentTime.value.getHours();
  if (hour < 6) {
    return "凌晨好";
  } else if (hour < 9) {
    return "早上好";
  } else if (hour < 12) {
    return "上午好";
  } else if (hour < 14) {
    return "中午好";
  } else if (hour < 18) {
    return "下午好";
  } else {
    return "晚上好";
  }
});
const router1 = useRouter();
//退出
const logoutbutton=async ()=>{
 await ElMessageBox.confirm("确定要退出吗？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).catch(() => {
    ElMessage.error("取消退出")
    return new Promise(() => {})
  });
  await logout().catch(() => {
   // ElMessage.error("退出失败");
  });
    ElMessage.success("退出成功"),
    useTokenStore().saveToken(""),
    router1.push("/login")
}
const updateTime = () => {
  currentTime.value = new Date();
  setTimeout(updateTime, 60000); // 每分钟更新一次时间
};

onMounted(() => {
  updateTime();
   // 确保组件初始化时从 store 获取最新的 avatarUrl
   avatarstore.avatarUrl = avatarstore.avatarUrl || 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';
});
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  background-color: rgb(248, 251, 251);
  justify-content: space-between;
  padding: 0 20px;
  height: 64px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  .header-left {
    display: flex;
    align-items: center;

    .collapse-icon {
      margin-right: 20px;
      cursor: pointer;
      font-size: 24px;
    }

    .breadcrumb {
      h2 {
        margin: 0;
        font-size: 18px;
        color: #4b82e7;
      }
    }
  }

  .header-right {
    display: flex;
    align-items: center;

    .el-dropdown-link {
      display: flex;
      align-items: center;
      cursor: pointer;
      
      .el-avatar {
        margin-right: 10px;
      }

      .arrow-down-icon {
        font-size: 16px;
        color: #fff;
      }
    }
  }
}
</style>

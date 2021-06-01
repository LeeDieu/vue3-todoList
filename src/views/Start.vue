<template>
  <!-- 开始页 -->
  <div class="body">
    <el-button type="primary" @click="start"
      >开始任务<i class="el-icon-arrow-right el-icon--right"></i
    ></el-button>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Start",
  setup() {
    let router = useRouter();
    let name = ref("lzy");
    let age = ref(21);
    let obj = ref({
      msg: "start",
    });

    onMounted(() => {
      //组件挂载的过程
      //数据dom..
      //发请求
      //数据初始化的操作 接收路由传递的参数
    });

    onUnmounted(() => {
      //组件卸载时的生命周期
      // 清除定时器 清除闭包函数...
    });

    let start = () => {
      //push 如果是穿的对象的形式 就可以传递参数
      //query传参
      //push里面还可以传入name name是路由名字
      //query传参path和name都可以
      //params传参只能用name
      //params传递的参数地址栏不显示，并且刷新页面后参数消失
      router.push({
        name: "Home",
        // path:'/home',
        // query:{
        //     name:name.value,
        //     age:age.value,
        //     obj:JSON.stringify(obj)
        // }
        params: {
          name: name.value,
          age: age.value,
          obj: JSON.stringify(obj.value),
        },
      });
    };

    return {
      start,
    };
  },
});
</script>


<style scoped lang='scss'>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
}
.body button {
  margin-top: 600px;
}
</style>
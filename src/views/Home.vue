<template>
  <!-- 编写html内容 -->
  <div class="body">
    <h1>ToDoList!</h1>
    <nav-header @add="add" class="header"></nav-header>
    <nav-main :list="list" @del="del" class="main"></nav-main>
    <nav-footer :list="list" @clear="clear" class="footer"></nav-footer>
    <div class="btn">
      <el-button type="primary" icon="el-icon-arrow-left" @click="exit"
        >返回首页</el-button
      >
    </div>
  </div>
</template>

<script>
import NavHeader from "@/components/navHeader/NavHeader";
import NavMain from "@/components/navMain/NavMain";
import NavFooter from "@/components/navFooter/NavFooter";
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Home", //组件名称

  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },
  setup() {
    let router = useRouter();
    let store = useStore();
    let list = computed(() => {
      return store.state.list;
    });

    let value = ref("");
    //添加任务
    let add = (val) => {
      value.value = val;
      //先判断有没有存在的任务 如果任务存在 不能重复添加
      let flag = true;
      list.value.map((item) => {
        if (item.title === value.value) {
          //有重复的任务
          flag = false;
          alert("任务已存在");
        }
      });
      //没有重复
      if (flag) {
        //调用mutation
        store.commit("addTodo", {
          title: value.value,
          complete: false,
        });
      }

      console.log(val);
    };

    //删除任务
    let del = (val) => {
      //调用删除的mutation
      store.commit("delTodo", val);
      console.log(val);
    };

    //清除已完成的
    let clear = (val) => {
      store.commit("clear", val);
    };

    //返回首页
    let exit = () => {
      console.log("object");
      router.push({
        name: "Start",
      });
    };

    return {
      add,
      value,
      list,
      del,
      clear,
      exit,
    };
  },
});
</script>

<style scoped lang='scss'>
.body {
  // padding: auto;
  margin: auto;
  width: 300px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // flex-basis: auto;
  border: solid 10px rgb(119, 52, 226);
  border-radius: 20px;
  justify-content: space-between;
  
}
.body header {
  // order: 4;
  width: auto;
  height: auto;
  border: rgb(0, 204, 255) solid 4px ;
  border-radius: 2px
  // align-self: flex-start;
}
.main {
  // order: 0;
  border: solid 4px greenyellow;
  border-radius: 10px
}
.footer {
  // order: -1;
  border: solid 4px rgb(202, 128, 9);
  border-radius: 30px
  // align-self: flex-end;
}
.btn {
  align-self: flex-end;
}
</style>
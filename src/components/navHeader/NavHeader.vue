<template>
  <header>
    <el-input
      placeholder="请输入任务名称"
      v-model="input"
      @keydown.enter="enter"
      clearable
    >
    </el-input>
  </header>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "navHeader",
  setup(props,ctx) {
    let input = ref("");
    //按回车确认
    let enter = () => {
      //把输入框的内容传递给父组件
      ctx.emit('add',input.value)
      //清空输入框
      input.value = ""
        // console.log(value.value)
    };
    return {
      input,
      enter,
    };
  },
});
</script>

<style lang="scss" scoped>
    input{
        margin-bottom: 10px;
    }

</style>

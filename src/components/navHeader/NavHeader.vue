<template>
  <header>
    <input
      placeholder="请输入任务名称"
      v-model="value"
      @keydown.enter="enter"
    />
  </header>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "navHeader",
  setup(props,ctx) {
    let value = ref("");
    //按回车确认
    let enter = () => {
      //把输入框的内容传递给父组件
      ctx.emit('add',value.value)
      //清空输入框
      value.value = ""
        // console.log(value.value)
    };
    return {
      value,
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

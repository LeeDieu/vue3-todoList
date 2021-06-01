<template>
  <div>
    <h1>This is Child component</h1>
    父组件传递过来的数据： {{ msg }} <br />
    <button @click="send">传值给父组件</button>
  </div>
</template>

<script>
import { defineComponent, ref,onMounted } from "vue";

export default defineComponent({
  name: "Child",
  //接收父组件传递过来的参数
  //props接收的数据也不能直接改
  props: {
    msg: {
      //数据类型校验
      type: String,
    },
  },
  setup(props, ctx) {
    let childMsg = ref("我是子组件的数据");
    let childNum = ref(21)
    console.log(props.msg);
    let send = () => {
      //通过ctx，emit分发事件
      //emit 第一个参数是事件名称 第二个是传递的数据
    //   ctx.emit("send", [childMsg.value,childNum.value]);  数组
    ctx.emit("send", {  //对象
        msg: childMsg.value,
        num: childNum.value
    })
    };

    onMounted(()=>{
         ctx.emit("send", childMsg.value);
    })

    return {
      childMsg,
      childNum,
      send,
    };
  },
});
</script>


<style>
</style>
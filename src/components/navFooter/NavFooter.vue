<template>
  <div class="container">
    <div>已完成{{ isComplete }} / 全部{{ list.length }}</div>
    <div v-if="isComplete > 0" class="btn">
      <button @click="clear">清除已完成</button>
    </div>
    <div class="exit">
      <button @click="exit">退出</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref ,computed} from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "navFooter",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup(props,ctx) {
    let router = useRouter();
    //过滤已完成的
    let isComplete = computed(()=>{
      let arr = props.list.filter(item=>{
        return item.complete
      })
      return arr.length
    });
    
    //清除已完成
    let clear = () => {
      //过滤未完成的
      let arr = props.list.filter(item=>{
        return item.complete ===false
      })
      ctx.emit('clear',arr)
      // console.log("clear");
    };
    //返回首页
    let exit = () => {
      console.log("object");
      router.push({
        name: "Start",
      });
    };
    return {
      isComplete,
     
      clear,
      exit,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  .btn {
    margin-left: 10px;
  }
  .exit {
    margin-left: 10px;
  }
}
</style>
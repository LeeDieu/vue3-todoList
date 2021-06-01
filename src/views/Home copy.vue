<template>
  <!-- 编写html内容 -->
  <div>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
    {{name}}--{{age}}--{{obj}}
  </div>
</template>

<script>
import NavHeader from "@/components/navHeader/NavHeader";
import NavMain from "@/components/navMain/NavMain";
import NavFooter from "@/components/navFooter/NavFooter";
import { computed, defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "Home", //组件名称

  //接收父组件的数据
  props: {},
  //定义子组件
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },
  setup(props, ctx) {
    //router是全局路由对象
    let router = useRouter();
    //route是当前路由对象
    let route = useRoute();
    //query传递过来的参数都是字符串类型
    console.log(route.params);
    let name = ref('')
        let age = ref(null)
        let obj = ref({
            
        })

    onMounted(() => {
      //组件挂载的过程
      //数据dom..
      //发请求
      //数据初始化的操作 接收路由传递的参数
      name.value = route.params.name;
      age.value = route.params.age * 1;
      obj.value = JSON.parse(route.params.obj);
    });

    let store = useStore();
    let list = computed(() => {
      return store.state.list;
    });

    return {
      list,
      name,
      age,
      obj
    };
  },
});
</script>

<style scoped lang='scss'>
</style>
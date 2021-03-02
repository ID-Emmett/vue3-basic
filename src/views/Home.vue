<template>
  <div>
    <ColumnList :list='testData'/>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import ColumnList, { ColumnProps } from "../components/ColumnList.vue";
const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1专栏",
    description: "这是test1的专栏,这是一段简单的简介介绍,测试",
    avatar:
      "https://i0.hdslb.com/bfs/archive/d67326a5b2833c3de4983785c2d1635b36624428.jpg@206w_116h_1c_100q.webp",
  },
  {
    id: 2,
    title: "test2专栏",
    description: "这是test2的专栏,这是一段简单的简介介绍,测试",
  },
  {
    id: 3,
    title: "test3专栏",
    description: "这是test2的专栏,这是一段简单的简介介绍,测试",
    avatar:
      "https://i1.hdslb.com/bfs/archive/43756d1f40d83163ebb9296b93eb808e14073e90.jpg@206w_116h_1c_100q.webp",
  },
  {
    id: 4,
    title: "test4专栏",
    description: "这是test2的专栏,这是一段简单的简介介绍,测试",
    avatar:
      "https://i1.hdslb.com/bfs/archive/43756d1f40d83163ebb9296b93eb808e14073e90.jpg@206w_116h_1c_100q.webp",
  },
];
export default defineComponent({
  name: "Home",
  setup() {
    return {
      testData,
    };
  },
  components: {
    ColumnList,
  },
});
</script>

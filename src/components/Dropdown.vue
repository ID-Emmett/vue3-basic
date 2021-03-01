<template>
  <div class="dropdown" ref="dropdownRef">
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggleOpen"
      >{{ title }}</a
    >
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <!-- <li><a class="dropdown-item" href="#">新建文章</a></li>
      <li><a class="dropdown-item" href="#">编辑资料</a></li> -->
      <slot></slot>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, onUnmounted, ref, watch } from "vue";
// 自定义函数,点击区域外触发关闭
import useClickOutside from "../hooks/useClickOutside";
export default defineComponent({
  name: "Dropdown",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    // 初始化setup时为null,加载完毕为html 需要断言
    const dropdownRef = ref<null | HTMLElement>(null);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };
    const isClickOutside = useClickOutside(dropdownRef);

    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false;
      }
    });
    return {
      isOpen,
      toggleOpen,
      dropdownRef,
    };
  },
});
</script>

<style>
</style>
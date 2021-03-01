// 自定义函数
import { ref, onMounted, onUnmounted, Ref } from "vue";
// 初始化setup时为null,加载完毕为html 需要断言
const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutside = ref(false);
  const handler = (e: MouseEvent) => {
    // 添加一个点击事件,未指定元素,所以为全局事件
    if (elementRef.value) {
      // contains:包含 ,判断ref元素是否包含e.target:当前节点
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false;
      } else {
        isClickOutside.value = true;
      }
    }
  };
  onMounted(() => {
    // 添加一个点击事件,未指定元素,所以为全局事件
    document.addEventListener("click", handler);
  });
  onUnmounted(() => {
    // 移除该事件
    document.removeEventListener("click", handler);
  });
  return isClickOutside;
};
export default useClickOutside;

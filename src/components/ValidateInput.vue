<template>
  <div class="validate-input-container pb-3">
    <input
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    />
    <span v-if="inputRef.error" class="invalid-feedback">{{
      inputRef.message
    }}</span>
  </div>
</template>

<script lang='ts'>
// 表单验证
import { defineComponent, reactive, PropType } from "vue";
const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
interface RuleProp {
  // required为所有条件中必须存在的作用是判断是否为空,再判断具体指定的条件
  type: "required" | "email" | "password";
  message: string;
}
export type RulesProp = RuleProp[];
export default defineComponent({
  name: "ValidateInput",
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String,
  },
  //父组件传递的attrs不显示在根元素
  inheritAttrs: false,
  setup(props, context) {
    // console.log(context.attrs);
    const inputRef = reactive({
      val: props.modelValue || "",
      error: false,
      message: "",
    });
    // TS:KeyboardEvent键盘事件
    const updateValue = (e: KeyboardEvent) => {
      const tragetValue = (e.target as HTMLInputElement).value;
      inputRef.val = tragetValue;
      context.emit("update:modelValue", tragetValue);
    };
    // input失去焦点时将父组件传递的props数据作为类型与提示信息,
    const validateInput = () => {
      if (props.rules) {
        // every()方法用于检测数组所有元素是否都符合指定条件 有一个不满足返回false
        const allPassed = props.rules.every((rule) => {
          // every形参为item每一项
          // console.log(rule);

          let passed = true;
          inputRef.message = rule.message;
          switch (rule.type) {
            case "required":
              // trim()方法清除首尾空格
              passed = inputRef.val.trim() !== "";
              break;
            case "email":
              passed = emailReg.test(inputRef.val);
              break;
            case "password":
              passed = inputRef.val.length >= 6;
              break;
            default:
              break;
          }
          return passed;
        });
        inputRef.error = !allPassed;
      }
    };
    return {
      inputRef,
      validateInput,
      updateValue,
    };
  },
});
</script>

<style>
</style>
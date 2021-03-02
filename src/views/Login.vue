<template>
  <div>
    <!-- 验证组件 -->
    <ValidateForm @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱</label>
        <ValidateInput
          :rules="emailRules"
          v-model="emailVal"
          placeholder="请输入邮箱地址"
          type="text"
          ref="inputRef"
        ></ValidateInput>
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <ValidateInput
          :rules="passwordRules"
          v-model="passwordVal"
          placeholder="请输入密码"
          type="password"
        ></ValidateInput>
      </div>
      <template #submit>
        <span class="btn btn-danger">Submit</span>
      </template>
    </ValidateForm>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import {useRouter} from 'vue-router'
import ValidateInput, { RulesProp } from "../components/ValidateInput.vue";
import ValidateForm from "../components/ValidateForm.vue";
export default defineComponent({
  setup() {
    const router = useRouter()
    const inputRef = ref();
    const emailVal = ref("");
    const passwordVal = ref("");
    const emailRules: RulesProp = [
      { type: "required", message: "email不能为空" },
      { type: "email", message: "email格式错误" },
    ];
    const passwordRules: RulesProp = [
      { type: "required", message: "密码不能为空" },
      { type: "password", message: "密码不能低于6位数" },
    ];

    // const emailRef = reactive({
    //   val: "",
    //   error: false,
    //   message: "",
    // });
    const onFormSubmit = (result: boolean) => {
      console.log(inputRef.value.validateInput());
      console.log("接受的值", result);
      if(result){
        router.push({name:'column',params:{id:'gogogogo'}})
      }
    };
    return {
      // emailRef,
      emailRules,
      passwordRules,
      emailVal,
      passwordVal,
      onFormSubmit,
      inputRef,
    };
  },
  components: {
    // 验证框和表单组件
    ValidateInput,
    ValidateForm,
  },
});
</script>

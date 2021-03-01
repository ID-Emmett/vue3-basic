<template>
  <div class="container">
    <GlobalHeader :user="currentUser" />
    <!-- <ColumnList :list="list"/> -->

    <ValidateForm @form-submit="onFormSubmit">
      <!-- <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="emailRef.val"
          @blur="validateEmail"
        />
        <div class="form-text" style="color: red" v-if="emailRef.error">
          {{ emailRef.message }}
        </div>
      </div> -->
      <!-- 密码验证组件 -->
      <div class="mb-3">
        <label class="form-label">密码</label>
        <ValidateInput
          :rules="passwordRules"
          v-model="passwordVal"
          placeholder="请输入密码"
          type="password"
        ></ValidateInput>
      </div>
      <!-- 邮箱验证组件 -->
      <div class="mb-3">
        <label class="form-label">邮箱</label>
        <ValidateInput
          :rules="emailRules"
          v-model="emailVal"
          placeholder="请输入邮箱地址"
          type="text"
        ></ValidateInput>
      </div>
      <template #submit>
        <span class="btn btn-danger">Submit</span>
      </template>
    </ValidateForm>
    <!-- <div>邮箱{{ emailVal }}</div>
    <div>密码{{ passwordVal }}</div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import ValidateInput, { RulesProp } from "./components/ValidateInput.vue";
import ValidateForm from "./components/ValidateForm.vue";
const currentUser: UserProps = {
  isLogin: true,
  name: "默认ID",
};
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
const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
export default defineComponent({
  name: "App",
  setup() {
    const emailVal = ref("");
    const passwordVal = ref("");
    const emailRules: RulesProp = [
      { type: "required", message: "email不能为空" },
      { type: "email", message: "email格式错误" },
    ];
    const passwordRules: RulesProp = [
      { type: "required", message: "密码不能为空" },
    ];

    const emailRef = reactive({
      val: "",
      error: false,
      message: "",
    });
    const validateEmail = () => {
      // 验证
      if (emailRef.val.trim() === "") {
        emailRef.error = true;
        emailRef.message = "不能为空";
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true;
        emailRef.message = "格式错误";
      } else {
        emailRef.error = false;
      }
    };
    const onFormSubmit = (result: boolean)=>{
      console.log('接受的值',result);
      
    }
    return {
      list: testData,
      currentUser,
      emailRef,
      validateEmail,
      emailRules,
      passwordRules,
      emailVal,
      passwordVal,
      onFormSubmit
    };
  },
  components: {
    // ColumnList,
    GlobalHeader,
    ValidateInput,
    ValidateForm
  },
});
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

<template>
  <div>
    <nav class="navbar navbar-dark bg-primary justify-content-between mb-4">
      <router-link to='/' class="navbar-brand" href="#">--专栏--</router-link>
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item">
          <router-link to="/login" href="#" class="btn btn-outline-light my-2">登录</router-link>
        </li>
        <li class="list-inline-item">
          <router-link to="/login" href="#" class="btn btn-outline-light my-2">注册</router-link>
        </li>
      </ul>
      <ul v-else class="list-inline mb-0">
        <li class="list-inline-item">
          <Dropdown :title="`你好 ${user.name}`">
            <DropdownItem><li><a class="dropdown-item" href="#">新建文章</a></li></DropdownItem>
            <DropdownItem><li><a class="dropdown-item" href="#">编辑文章</a></li></DropdownItem>
            <DropdownItem><li><a class="dropdown-item" href="#">退出登录</a></li></DropdownItem>
          </Dropdown>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
import Dropdown from "./Dropdown.vue";
import DropdownItem from "./DropdownItem.vue";

export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: "GlobalHeader",
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
  components: {
    Dropdown,
    DropdownItem,
  },
});
</script>

<style>
</style>
<template>
  <Page>
    <GridLayout class="login" row="0" rows="auto, auto, auto, auto, auto">
      <Label class="login__label" row="0" text="Email" />
      <TextField row="1" class="login__input" hint="E.g. user@examples.com" keyboardType=" email" v-model="input.username" />
      <Label class="login__label" row="2" text="Password" />
      <TextField row="3" class="login__input" hint="Password" secure="true" v-model="input.password" /> 
      <Button row="4" text="Login" @tap="onLoginBtnTap" />     
    </GridLayout>
  </Page>
</template>

<script lang='ts'>


import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

const Auth = namespace("auth");

@Component
export default class Login extends Vue {
  private input = { username: "", password: "" };

  @Auth.Getter("loginIsLoading")
  private isLoading!: boolean;

  @Auth.Getter("loginError")
  private error!: boolean | string;

  @Auth.Action("login")
  private login: any;

  private async onLoginBtnTap() {
    const isLogin = await this.login(this.input);
  }
}
</script>

<style scoped>
Page {
  background-color: #0082c3;
}

.login {
  padding: 0 15px;
  vertical-align: middle;
}

.login__label {
  color: #fff;
  margin-top: 10;
}

.login__input {
  color: #fff;
  placeholder-color: #ccc;
}
</style>
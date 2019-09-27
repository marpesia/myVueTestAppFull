<template>
  <Page>
    <ActionBar class="action-bar" title="Welcome to NativeScript-Vue!">
      <StackLayout class="stack-layout" orientation="horizontal">
        <Button text="listView" @tap="$navigator.navigate('listView')" />
        <Button text="RadList" @tap="$navigator.navigate('RadList')" />
        <Button text="login" @tap="$navigator.navigate('login')" />
      </StackLayout>
    </ActionBar>
    <GridLayout columns="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" />
    </GridLayout>
  </Page>
</template>

<script lang="ts">
export default {
  data() {
    return {
      msg: "Hello World!"
    };
  }
};
</script>

<style lang="scss" scoped>
.action-bar {
  background-color: #53ba82;
  color: #ffffff;
}

.stack-layout {
  background-color: red;
  width: auto;
  text-align: center;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}

button {
  color: #53ba5b;
  background: #ffffff;
  border-color: #214b34;
  border-width: 1;
}
</style>

<template>
  <Page>
    <ActionBar title="RadListView">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$navigator.back()" />
    </ActionBar>
    <GridLayout rows="*, auto">
      <RadListView
        ref="listView"
        for="item in itemList"
        layout="staggered"
        pullToRefresh="true"
        @itemTap="onItemTap"
        @pullToRefreshInitiated="onPullRefreshInitiated"
      >
        <v-template>
          <StackLayout orientation="vertical">
            <Label :text="item.name" :class="item.type" />
          </StackLayout>
        </v-template>
      </RadListView>
      <AbsoluteLayout row="0">
        <Button text="up" @tap="toTop" />
      </AbsoluteLayout>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class RadList extends Vue {
  private msg = "My list";
  private itemList = [
    { name: "Item 1", type: "red" },
    { name: "Item 2", type: "green" },
    { name: "Item 3", type: "blue" },
    { name: "Item 4", type: "red" },
    { name: "Item 5", type: "green" },
    { name: "Item 6", type: "blue" }
  ];

  private onItemTap(event) {
    console.log("onItemTap", event.item.name);
  }

  private onPullRefreshInitiated({ object }) {
    console.log("onPullRefreshInitiated");

    this.$nextTick(() => {
      const nextList = [
        { name: "Item 7", type: "red" },
        { name: "Item 8", type: "green" },
        { name: "Item 9", type: "blue" },
        { name: "Item 10", type: "red" },
        { name: "Item 11", type: "green" },
        { name: "Item 12", type: "blue" }
      ];
      this.itemList = [...this.itemList, ...nextList];
      object.notifyPullToRefreshFinished();
    });
  }

  private toTop(event) {
    console.log("toTop", event);
  }

  private watch() {
    console.log("start", this.$refs.listView);
  }
}
</script>

<style lang="scss" scoped>
ActionBar {
  background-color: #53ba82;
  color: #fff;
}

.message {
  color: #333;
  font-size: 20;
  text-align: center;
  vertical-align: center;
}

button {
  background-color: #fff;
  color: #53ba82;
}

label {
  color: #fff;
  font-size: 25;
  height: 200;
  padding: 25;
  text-align: center;
}

.red {
  background-color: rgb(204, 193, 159);
}

.green {
  background-color: rgb(137, 189, 137);
}

.blue {
  background-color: rgb(145, 145, 185);
}
</style>

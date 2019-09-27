<template>
  <Page>
    <ActionBar title="ListView">
      <Button text="Back" @tap="$navigator.back()" />
    </ActionBar>
    <ListView
      class="itemSwipeTemplate"
      for="item in itemList"
      @itemTap="onItemTap"
      @loaded="onLoad"
      @loadMoreItems="onLoadMoreItems"
      @swipeActions="false"
      @selectionBehavior="onSelectionBehavior"
      @itemSwipeProgressEnded="onSwipeCellFinished"
      @itemSwipeProgressStarted="onSwipeCellStarted"
      @itemSwipeProgressChanged="onSwipeCellProgressChanged"
      @itemSwiping="onItemSwiping"
    >
      <v-template>
        <StackLayout>
          <Label :text="item.name" />
        </StackLayout>
      </v-template>
    </ListView>
  </Page>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      itemList: [
        { name: "Item 1", type: "red" },
        { name: "Item 2", type: "green" },
        { name: "Item 3", type: "blue" },
        { name: "Item 4", type: "red" },
        { name: "Item 5", type: "green" },
        { name: "Item 6", type: "blue" },
        { name: "Item 7", type: "red" },
        { name: "Item 8", type: "green" },
        { name: "Item 9", type: "blue" }
      ]
    };
  },
  methods: {
    onItemTap(event) {
      console.log("tap", event.item.name);
    },
    onLoad(event) {
      console.log("load");
    },
    onLoadMoreItems(event) {
      console.log("more");

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
      });
    },
    onSelectionBehavior(event) {
      console.log("select");
    },
    onSwipeCellFinished(event) {
      console.log("swipe finish");
    },
    onSwipeCellStarted(event) {
      console.log("swipe start");
    },
    onSwipeCellProgressChanged(event) {
      console.log("swipe change");
    },
    onItemSwiping(event) {
      console.log("swipe item");
    },
    onSwipe(event) {
      console.log("swipe", event);
    },
    onPan(event) {
      console.log("pan", event);
    }
  }
});
</script>

<style lang="scss" scoped>
ActionBar {
  background-color: #53ba82;
  color: #fff;

  & button {
    background-color: #fff;
    color: #53ba82;
  }
}

label {
  background-color: #ccc;
  color: rgb(0, 0, 0);
  font-size: 25;
  height: 100;
  padding: 25;
  text-align: center;
}
</style>

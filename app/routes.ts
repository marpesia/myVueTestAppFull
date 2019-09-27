import App from "./components/App.vue";
import RadList from "./Views/RadList/RadList.vue";
import ListView from "./Views/List/ListView.vue";
import Login from "./Views/Login/Login.vue";

export const routes = {
  home: {
    component: App
  },
  RadList: {
    component: RadList
  },
  listView: {
    component: ListView
  },
  login: {
    component: Login
  }
};

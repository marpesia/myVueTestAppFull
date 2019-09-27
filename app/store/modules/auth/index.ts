import { ActionTree, GetterTree, Module, MutationTree, Commit } from "vuex";
import api from "@/services/api";

import { LoginInput } from "@/services/api/types";

import { RootState } from "@/store/types";
import { AuthState } from "./types";
import { Login } from "@/domain";

const initialState: AuthState = {
  loginIsLoading: false,
  loginError: false
};
const getters: GetterTree<AuthState, RootState> = {
  loginIsLoading(state: AuthState): boolean { return state.loginIsLoading; },
  loginError(state: AuthState): string | boolean { return state.loginError; }
};
const mutations: MutationTree<AuthState> = {
  // login
  loginRequest(state: AuthState) {
    state.loginIsLoading = true;
    state.loginError = false;
  },
  loginSuccess(state: AuthState, login: Login) {
    state.loginIsLoading = false;
    api.setAuthorization(login.token);
  },
  loginError(state: AuthState, error: string) {
    state.loginIsLoading = false;
    state.loginError = error;
  },
  // logout
  logout(state: AuthState) {
    api.setAuthorization();
  },
};
const actions: ActionTree<AuthState, RootState> = {
  async login(
    { commit, state }: { commit: Commit, state: AuthState },
    input: LoginInput,
  ) {
    commit("loginRequest");
    try {
      const login = await api.auth.login(input);
      commit("loginSuccess", login);
      return true;
    } catch (error) {
      commit("loginError", error );
      return false;
    }
  },
  async logout(
    { commit, state }: { commit: Commit, state: AuthState },
  ) {
    commit("logout");
  }
};

const module: Module<AuthState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions,
};

export default module;
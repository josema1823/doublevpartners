import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import { Module } from "vuex";

const Users: Module<any, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
};
export default Users;

import Vue from "vue";
import { ActionContext } from "vuex";
import { UsersState } from "./state";
import { User } from "@/models/user";

export default {
  async loadUsers(ctx: ActionContext<UsersState, any>, payload?: any) {
    try {
      const { items = [] } = await Vue.$api.get(payload);
      const handlerUser = items.map((u: any) => new User(u));
      const users = handlerUser.slice(0, 10);
      ctx.commit("setUsers", users);
      return true;
    } catch (e) {
      return undefined;
    }
  },

  async detailUser(ctx: ActionContext<UsersState, any>, payload?: any) {
    const data = await Vue.$api.getOne(payload);
    return data && new User(data);
  },
};

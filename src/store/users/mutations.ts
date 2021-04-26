import { User } from "@/models/user";
import { UsersState } from "./state";

export default {
  setUsers(state: UsersState, users: User[]) {
    state.users = users;
  },
};

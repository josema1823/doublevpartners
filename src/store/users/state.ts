import { User } from "@/models/user";

export interface UsersState {
  users: User[];
}

export default () => {
  const state: UsersState = {
    users: [],
  };
  return state;
};

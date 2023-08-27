import { atom } from "recoil";

const tokenState = atom({
  key: "tokenState",
  default: null,
});

const dataUserState = atom({
  key: "dataUserState",
  default: null,
});

export { tokenState, dataUserState };

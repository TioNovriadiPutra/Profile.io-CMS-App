import { atom } from "recoil";

const loadingScreenState = atom({
  key: "loadingScreenState",
  default: false,
});

const loadingModalState = atom({
  key: "loadingModalState",
  default: false,
});

export { loadingScreenState, loadingModalState };

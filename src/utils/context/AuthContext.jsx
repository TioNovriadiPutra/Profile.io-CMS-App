import { createContext, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import {
  loadingModalState,
  loadingScreenState,
} from "../../store/loadingStore";
import { axiosInstance } from "../config/axios";
import { API_ACCESS } from "../config/url";
import { showToast } from "../helper/showToast";
import { dataUserState, tokenState } from "../../store/authStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const setLoadingModal = useSetRecoilState(loadingModalState);
  const setLoadingScreen = useSetRecoilState(loadingScreenState);
  const setToken = useSetRecoilState(tokenState);
  const setDataUser = useSetRecoilState(dataUserState);

  const login = async (data) => {
    setLoadingModal(true);

    await axiosInstance
      .request({
        method: "POST",
        url: API_ACCESS.login,
        data: {
          email: data.email,
          password: data.password,
        },
      })
      .then((response) => {
        setToken(response.data.token);
        setDataUser(response.data.dataUser);
        AsyncStorage.setItem("@token", response.data.token);
        AsyncStorage.setItem(
          "@dataUser",
          JSON.stringify(response.data.dataUser)
        );
        showToast(response.data.message);
      })
      .catch((e) => {
        showToast(e.response.data.message);
      })
      .finally(() => setLoadingModal(false));
  };

  const logout = async () => {
    setLoadingModal(true);
    setToken(null);
    setDataUser(null);
    await AsyncStorage.removeItem("@token");
    await AsyncStorage.removeItem("@dataUser");
    showToast("Logout success!");
    setLoadingModal(false);
  };

  const isLoggedIn = async () => {
    setLoadingScreen(true);
    let token = await AsyncStorage.getItem("@token");
    let dataUser = await AsyncStorage.getItem("@dataUser");

    if (token) {
      setToken(token);
      setDataUser(dataUser);
    }
    setLoadingScreen(false);
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

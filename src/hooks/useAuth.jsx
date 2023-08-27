import { useSetRecoilState } from "recoil";
import { authState } from "../store/authStore";
import { axiosInstance } from "../utils/config/axios";
import { API_ACCESS } from "../utils/config/url";
import { showToast } from "../utils/helper/showToast";
import { loadingModalState } from "../store/loadingStore";

export const useAuth = () => {
  const setAuthData = useSetRecoilState(authState);

  const logout = () => {
    setAuthData(null);
  };

  return {
    login,
    logout,
  };
};

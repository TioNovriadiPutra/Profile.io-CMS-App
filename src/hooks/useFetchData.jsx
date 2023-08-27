import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loadingModalState } from "../store/loadingStore";
import { axiosInstance } from "../utils/config/axios";
import { tokenState } from "../store/authStore";
import { showToast } from "../utils/helper/showToast";
import { navState } from "../store/navStore";

export const useFetchData = () => {
  const setLoadingModal = useSetRecoilState(loadingModalState);
  const token = useRecoilValue(tokenState);
  const nav = useRecoilValue(navState);

  const [data, setData] = useState(null);

  const fetchData = async (
    url,
    method,
    auth = false,
    form = false,
    body = null,
    dest = null,
    params = null
  ) => {
    if (method === "POST" || "PUT") {
      setLoadingModal(true);
    }

    setData(null);

    await axiosInstance
      .request({
        method,
        url,
        headers: {
          "Content-Type":
            form === true ? "multipart/form-data" : "application/json",
          Authorization: auth === true ? `Bearer ${token}` : null,
        },
        data: body,
      })
      .then((response) => {
        if (method === "GET") {
          setData(response.data.data);
        } else {
          showToast(response.data.message);
        }

        if (dest !== null) {
          nav.navigate(dest, params);
        }
      })
      .catch((e) => {
        showToast(e.response.data.message);
      })
      .finally(() => setLoadingModal(false));
  };

  return {
    fetchData,
    data,
  };
};

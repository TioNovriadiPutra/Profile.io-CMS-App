import React, { useContext, useEffect } from "react";
import MainContainer from "../../containers/MainContainer";
import LoginHeader from "../../components/organisms/headers/LoginHeader";
import AppsFormContent from "../../components/organisms/contents/AppsFormContent";
import LoginFooter from "../../components/organisms/footers/LoginFooter";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { navState } from "../../store/navStore";
import LoadingModal from "../../components/templates/LoadingModal";
import { loadingModalState } from "../../store/loadingStore";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../utils/context/AuthContext";

const Login = ({ navigation }) => {
  const setNav = useSetRecoilState(navState);
  const loadingModal = useRecoilValue(loadingModalState);

  const { control, handleSubmit } = useForm();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    setNav(navigation);
  }, []);

  return (
    <MainContainer>
      <LoginHeader />
      <AppsFormContent
        dataInput={[
          {
            type: "text",
            name: "email",
            defaultValue: "",
            control: control,
            placeholder: "Email",
          },
          {
            type: "password",
            name: "password",
            defaultValue: "",
            control: control,
            placeholder: "Password",
          },
        ]}
        label={"Masuk"}
        onSubmit={handleSubmit(login)}
      />
      <LoginFooter />
      <LoadingModal visible={loadingModal} />
    </MainContainer>
  );
};

export default Login;

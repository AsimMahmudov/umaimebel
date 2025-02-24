"use client";
import { usePostLoginUserMutation } from "@/redux/api/auth";
import { SubmitHandler, useForm } from "react-hook-form";

interface LoginType {
  username: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginType>();
  const [postLoginUser, { isLoading, error }] = usePostLoginUserMutation();

  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    try {
      const response = await postLoginUser(data).unwrap();
      localStorage.setItem("user", JSON.stringify(response.access));
      console.log("Успешный вход:", response);
    } catch (err) {
      console.error("Ошибка входа:", err);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("username", { required: true })} />
        <input type="text" {...register("password", { required: true })} />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Загрузка..." : "Войти"}
        </button>
      </form>
    </div>
  );
};

export default Login;

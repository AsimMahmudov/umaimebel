"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePostRegisterUserMutation } from "@/redux/api/auth";

interface RegisterType {
  username: string;
  email: string;
  password: string;
}

const Register = () => {
  const { register, handleSubmit } = useForm<RegisterType>();
  const [postRegisterUser, { isLoading, error }] = usePostRegisterUserMutation();

  const onSubmit: SubmitHandler<RegisterType> = async (data) => {
    try {
      const response = await postRegisterUser(data).unwrap();
      console.log("Успешная регистрация:", response);
    } catch (err) {
      console.error("Ошибка регистрации:", err);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("username", { required: true })} />
        <input type="text" {...register("email", { required: true })} />
        <input type="text" {...register("password", { required: true })} />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Загрузка..." : "Зарегистрироваться"}
        </button>
      </form>
    </div>
  );
};

export default Register;

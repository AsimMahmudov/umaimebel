"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePostRegisterUserMutation } from "@/redux/api/auth";
import axios from "axios";

interface RegisterType {
  user_image: string;
  phone_number: string;
  username: string;
  email: string;
  password: string;
}

const Register = () => {
  const { register, handleSubmit } = useForm<RegisterType>();
  const [postRegisterUser] = usePostRegisterUserMutation();

  const onSubmit: SubmitHandler<RegisterType> = async (data) => {
    const formData = new FormData();
    formData.append("file", data.user_image[0]);

    try {
      const { data: uploadFile } = await axios.post(
        "https://api-crud.elcho.dev/api/v1/upload/file",
        formData,
         
      );
      const newData = {
        user_image: uploadFile.url,
        phone_number: data.phone_number,
        username: data.username,
        email: data.email,
        password: data.password,
      };

      const userdata = postRegisterUser(newData)
      console.log("Ответ сервера после регистрации:", userdata);
    } catch (error: any) {
      console.error("Ошибка при обработке запроса:", error);

      if (error.response) {
        console.error("Статус ошибки:", error.response.status);
        console.error("Ответ сервера:", error.response.data);
      } else if (error.request) {
        console.error("Ошибка при запросе:", error.request);
      } else {
        console.error("Ошибка при настройке запроса:", error.message);
      }
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" {...register("user_image", { required: true })} />
        <input
          type="text"
          placeholder="Введите номер телефона"
          {...register("phone_number", { required: true })}
        />
        <input
          type="text"
          placeholder="Введите имя пользователя"
          {...register("username", { required: true })}
        />
        <input
          type="email"
          placeholder="Введите email"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          placeholder="Введите пароль"
          {...register("password", { required: true })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;

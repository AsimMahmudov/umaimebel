"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface UserType {
  email: string;
  id: number;
  phone_number: number;
  user_image: string;
  username: string;
}

const User = () => {
  const [user, setUser] = useState<UserType[]>([]);
  const fetchUserProfile = async () => {
    const token = localStorage.getItem("user");

    if (!token) {
      console.log("Токен не найден");
      return;
    }

    const parsedToken = JSON.parse(token);
    const { data } = await axios.get("http://13.60.242.1/user-profiles/", {
      headers: {
        Authorization: `Bearer ${parsedToken}`,
      },
    });
    setUser(data);
    console.log("Данные пользователя:", data);
  };
  useEffect(() => {
    fetchUserProfile();
  }, []);
  return (
    <div>
      Пользователь:{" "}
      {user.map((item) => (
        <div key={item.id}>
          <span>{item.id}</span>
          <h3>{item.email}</h3>
          <h3>{item.username}</h3>
          <h3>{item.phone_number ? item.phone_number : "No phone number"}</h3>
          <img src={item.user_image} alt="User photo" />
        </div>
      ))}
    </div>
  );
};

export default User;

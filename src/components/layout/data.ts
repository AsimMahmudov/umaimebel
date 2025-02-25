import { IconType } from "react-icons";
import { FaHeart, FaShoppingCart, FaUserAlt } from "react-icons/fa";

export const nav_links = [
	{
		name: "Главная",
		link: "/",
	},
	{
		name: "Каталог",
		link: "/catalog",
	},
	{
		name: "Все продукты",
		link: "/all-product",
	},
	{
		name: "Контакты",
		link: "#contact",
	},
];

 

interface ISocialMedia {
  icon: IconType;
  link: string;
}

export const social_media: ISocialMedia[] = [
  {
    icon: FaHeart,
    link: "/like",
  },
  {
    icon: FaShoppingCart,
    link: "/basket",
  },
  {
    icon: FaUserAlt,
    link: "/profile",
  },
];
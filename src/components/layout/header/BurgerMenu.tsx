import React, { FC } from "react";
import scss from "../header/BurgerMenu.module.scss";
import Link from "next/link";
import { FaHeart, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

interface LinksType {
	name: string;
	link: string;
}

interface BurgerMenuProps {
	links: LinksType[];
	isOpen: boolean;
	setIsOpen: (state: boolean) => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ links, isOpen, setIsOpen }) => {
	return (
		<div
			onClick={() => setIsOpen(!isOpen)}
			className={
				isOpen ? `${scss.burger_menu} ${scss.active}` : `${scss.burger_menu}`
			}>
			<div
				onClick={(e) => e.stopPropagation()}
				className={
					isOpen ? `${scss.content} ${scss.active}` : `${scss.content}`
				}>
				<h1 className={scss.icon} onClick={() => setIsOpen(!isOpen)}>
					<GoArrowRight />
				</h1>
				<div className={scss.nav}>
					{links.map((item, index) => (
						<Link
							key={index}
							onClick={() => setIsOpen(!isOpen)}
							href={item.link}
							className={scss.link}>
							{item.name}
						</Link>
					))}
				</div>
				<div className={scss.buutons}>
					<button className={scss.btn}>
						<FaHeart />
					</button>
					<button className={scss.btn}>
						<FaShoppingCart />
					</button>
					<button className={scss.btn}>
						<FaUserAlt />
					</button>
				</div>

				<Link href={"/"} className={scss.logo}>
					UMAIMEBEL
				</Link>
			</div>
		</div>
	);
};

export default BurgerMenu;

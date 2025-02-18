"use client";
import scss from "../header/Header.module.scss";
import { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import Link from "next/link";
import { FaHeart, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { nav_links } from "../data";
 

const Header = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 1000);
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.addEventListener("resize", handleResize);
		};
	}, []);
	return (
		<header className={scss.Header}>
			<div className={scss.header}>
				<div className="container">
					<div className={scss.content}>
						<Link href={"/"} className={scss.logo}>
							UMAIMEBEL
						</Link>

						{isMobile ? (
							<>
								<button className={scss.bur} onClick={() => setIsOpen(!isOpen)}>
								<GiHamburgerMenu />
								</button>
								<BurgerMenu links={nav_links} isOpen={isOpen}  setIsOpen={setIsOpen}/>
							</>
						) : (
							<>
								<div className={scss.nav}>
										{nav_links.map((item, index) => (
											<Link key={index} href={item.link} className={scss.link}>{item.name}</Link>
										))}
								</div>
								<div className={scss.buutons}>
									 <button className={scss.btn}><FaHeart /></button>
                   <button className={scss.btn}><FaShoppingCart /></button>
                   <button className={scss.btn}><FaUserAlt /></button>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

/////////////////////////

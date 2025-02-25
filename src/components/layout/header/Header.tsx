"use client";
import scss from "../header/Header.module.scss";
import { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import Link from "next/link";
import { nav_links, social_media } from "../data";
import { LuAlignRight } from "react-icons/lu";
 

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
								<LuAlignRight />
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
									  {social_media.map((el,index) => (
											 <Link key={index} href={el.link}>
												<button className={scss.btn}><el.icon /></button>
											 </Link>
										))}
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


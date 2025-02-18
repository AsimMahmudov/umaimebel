import Link from "next/link";
import scss from "../footer/Footer.module.scss";
import { nav_links } from "../data";
import {
	EMAIL_ADDRESS,
	EMAIL_ADDRESS_LINK,
	PHONE_NUMBER,
} from "@/constants/admin";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

import map from "@/assets/image/image 11.png";
import Contact from "@/components/pages/home/contact/Contact";

const Footer = () => {
	return (
		<>
			<Contact />
			<footer className={scss.Footer}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.box}>
							<Link href={"/"} className={scss.logo}>
								UMAIMEBEL
							</Link>

							<div className={scss.line} />

							<div className={scss.contacts}>
								<Link className={scss.contact} href={`tel:${PHONE_NUMBER}`}>
									{PHONE_NUMBER} <GoArrowUpRight />
								</Link>
								<Link
									className={scss.contact}
									href={`malito:${EMAIL_ADDRESS_LINK}`}>
									{EMAIL_ADDRESS} <GoArrowUpRight />
								</Link>
							</div>

							<div className={scss.line} />

							<div className={scss.nav}>
								{nav_links.map((item, index) => (
									<Link key={index} href={item.link} className={scss.link}>
										{item.name}
									</Link>
								))}
							</div>
						</div>

						<div className={scss.box2}>
							<div className={scss.image_map}>
								<Image fill objectFit="cover" src={map} alt="map" />
							</div>

							<Link className={scss.contact} href={`/`}>
								ул.Ибраимова, 64/пер. ул.Московскую, г.Бишкек
								<GoArrowUpRight />
							</Link>
						</div>
					</div>

					<div className={scss.line} />

					<div className={scss.block}>
						<p className={scss.text}>© 2025 UMAIMEBEL. Все права защищены.</p>
						<p className={scss.text}>Разработал SKY LEVEL LLC</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;

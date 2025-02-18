import scss from "./Contact.module.scss";

import whatsapp from "@/assets/image/whatsapp.png";
import telegram from "@/assets/image/telegram.png";
import instagram from "@/assets/image/Instagram.png";
import Image from "next/image";

const Contact = () => {
	const data = [
		{
			title: "WhatsApp",
			icon: whatsapp,
		},
		{
			title: "Telegram",
			icon: telegram,
		},
		{
			title: "Instagram",
			icon: instagram,
		},
	];
	return (
		<div id="contact" className={scss.Contact}>
			<div className="container">
				<h1>Связаться с нами</h1>
				<div className={scss.line} />
				<div className={scss.content}>
					{data.map((el, index) => (
						<div key={index} className={scss.card}>
							<Image width={50} height={50} src={el.icon} alt="img" />
							<h1>{el.title}</h1>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Contact;

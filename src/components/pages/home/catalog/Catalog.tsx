import { GiBunkBeds } from "react-icons/gi";
import scss from "./Catalog.module.scss";
import { LuSofa } from "react-icons/lu";
import { TbArmchair } from "react-icons/tb";
import { PiLockersBold } from "react-icons/pi";
import { BiCabinet } from "react-icons/bi";
import { MdOutlineTableBar } from "react-icons/md";

const Catalog = () => {
	const data = [
		{
			icon: <LuSofa />,
			title: "Диваны",
		},
		{
			icon: <TbArmchair />,
			title: "Кресла",
		},

		{
			icon: <PiLockersBold />,
			title: "Шкафы",
		},
		{
			icon: <BiCabinet />,
			title: "Тумбы",
		},
		{
			icon: <MdOutlineTableBar />,
			title: "Столы",
		},
		{
			icon: <GiBunkBeds />,
			title: "Кровать",
		},
		{
			icon: <GiBunkBeds />,
			title: "Матрасы",
		},

		{
			icon: <GiBunkBeds />,
			title: "ковры",
		},
	];
	return (
		<div className={scss.Catalog}>
			<div className="container">
				<h1>Связаться с нами</h1>
				<div className={scss.line} />
				<div className={scss.content}>
					{data.map((el, index) => (
						<div key={index} className={scss.card}>
							<h1>{el.icon}</h1>
							<h2>{el.title}</h2>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Catalog;

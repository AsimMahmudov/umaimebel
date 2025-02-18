import { GiBunkBeds } from "react-icons/gi";
import scss from "./Catalog.module.scss";

const Catalog = () => {
	const data = [
		{
			icon: <GiBunkBeds />,
			title: "Кровати",
		},
		{
			icon: <GiBunkBeds />,
			title: "Кровати",
		},
		{
			icon: <GiBunkBeds />,
			title: "Кровати",
		},
		{
			icon: <GiBunkBeds />,
			title: "Кровати",
		},
		{
			icon: <GiBunkBeds />,
			title: "Кровати",
		},
		{
			icon: <GiBunkBeds />,
			title: "Кровати",
		},
		{
			icon: <GiBunkBeds />,
			title: "Кровати",
		},
		{
			icon: <GiBunkBeds />,
			title: "Кровати",
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

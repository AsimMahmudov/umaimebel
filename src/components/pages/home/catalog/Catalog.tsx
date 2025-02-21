 
import scss from "./Catalog.module.scss";
 
import Link from "next/link";
import { catalog_data } from "./CatalogData";

const Catalog = () => {
	 
	return (
		<div className={scss.Catalog}>
			<div className="container">
				<h1>Связаться с нами</h1>
				<div className={scss.line} />
				<div className={scss.content}>
					{catalog_data.map((el, index) => (
						<Link key={index} href={`/catalog/${el.id}`}>
							<div   className={scss.card}>
								<h1>{el.icon}</h1>
								<h2>{el.title}</h2>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Catalog;

"use client";
import { useParams } from "next/navigation";
import scss from "./CatalogDetails.module.scss";
import { catalog_data } from "./CatalogData";
import Card from "@/components/ui/card/Card";

const CatalogDetails = () => {
	const { id } = useParams();
	const data = catalog_data.find((item) => item.id === Number(id));

	if (!data) {
		return <p>Товар не найден</p>;
	}

	console.log(catalog_data, "catalog_data");

	return (
		<div className={scss.CatalogDetails}>
			<div className="container">
				<h2>{data?.title}</h2>

				<div className={scss.content}>
					<Card />
				</div>
			</div>
		</div>
	);
};

export default CatalogDetails;





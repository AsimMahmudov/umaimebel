import Card from "@/components/ui/card/Card";
import scss from "./AllProduct.module.scss";

const AllProduct = () => {
	return (
		<div className={scss.Hero}>
			<div className="container">
				<div className={scss.content}>
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
};

export default AllProduct;
